# In Progress!! not done:)

<!-- Styles -->
<style>
.green {
    color: green;
    font-weight:700;
    font-size: 1.2rem;
}
.purple {
    color: #BA55D3;
    font-weight:700;
    font-size: 1.2rem;
}
</style>

# _How to create an autocomplete feature and a Search Term & cross-filter it all with React.js_

<div className="purple">How do you filter your data array with React.js? What kind of HTML elements are best for your goal? How can I filter different data fields with cross-filtering between different HTML elements? How can I improve the user experience in small projects? This article will try to answer those questions, and assist junior developers in their first steps😊</div>

### ***Contents:***

- [My Setup Is An Open Canvas](#my-setup-is-an-open-canvas)
- [How To Filter From A Dropdown Menu With React](#how-to-filter-from-a-dropdown-menu-with-react)
- [Driving data from redux store:](#driving-data-from-redux-store)
- [HTML Select Element](#html-select-element)
- [Data List for the rescue](#data-list-for-the-rescue)
- [Implementing a Search Term](#implementing-a-search-term)
- [Cross Filter your Array](#cross-filter-your-array)
- [Wrapping Up](#wrapping-up)

There are a lot of ways you can filter your data array. This article will cover some of my favorites. If you are working on a personal project or an MVP version, or even if you want to rethink and rewrite a given logic, you may want to think about the issue from the user experience point of view first. What are his goals and how can you help him to achieve them? <br/>
I am working on the MVP of a junior’s project, building an app for the graduates of “Educating for Excellence” - a non-profit organization that strives to reduce socioeconomic disparity. We are working with React.js (JavaScript) on the client’s side and node.js/express.js + SQL on the server side. For our global state management, we use the redux toolkit. <br/>
In our application, after registration and logging in, the user will be directed to the home page, which contains the dashboard. The main part is a feed of the last updates, of four categories: new jobs, events, scholarships, and graduate’s index. From the feed/dashboard, you can navigate to a designated page for each category. There, the user will be able to filter the category list. But how exactly? For the most part, it is still an open canvas.

## _My Setup Is An Open Canvas_

I had a few things to consider here: 
- One specific demand we have from our client is to filter the graduate’s list by community center  title (Each graduate has been enrolled in a center, The title represents the geographic location here). My task is to try to combine a select dropdown menu, with an autocomplete search input. 
- I also know there are 121 community centers, and many of them are no longer functional. I also checked my current graduates list, to see how many unique centers there are for our graduates, => 7. 
- Taking the user needs into consideration, there could be a few useful filters here:
  - The user may want to search for his besty by his/her name.
If a graduate wants to apply to some position, he may want to look for other graduates that work at the same company.
  - A graduate may want to search for other graduates that work in the same occupation as he is applying for (technology, restaurant business, ...). But, taking the occupation field in the graduate object for example, this field is not categorized - the user updates it as text input.
  - There could be other useful searches, some I already think of (geographic location), and some may arise only after the MVP will be in production.
- There are also constraints influenced by the object you have. The graduate object contains different fields we can filter by. Maybe the best user experience will be filtering by the name of the company someone works in, But I just do not have that field in the user object. I have a field where the user can update free text about him/herself, displaying any information she wants on her index card. So, we can work with that.
- Front vs. Back-End filtering: The advantage I gain from filtering in the front in my project, is very fast and efficient filtering. If done in the backend, every time the user will want to select a different category from the dropdown menu, I will need a call to the server, fetching the filtered data, and the server will need to go and check in different SQL tables in our case - all that will take tonnes of time! A much better user experience, for most of them. Front-End filtering may be hard for the system processor of users with an old smartphone. Well, that’s why the application is also for desktops.

## _How To Filter From A Dropdown Menu With React_

Facing my first challenge of filtering the graduates array by community center, I needed to think about what options I want to display to the user, what HTML element is best for this task, how to connect it to my state, and how to implement that functionality in clean code.

### _Driving data from redux store:_

So Many Options🤯 - 121 options in my case. But only 7 of them are relevant to the user now – the list will grow as more users will register for the app. Yet I do not want to overload the user with unnecessary information. I thought it will be a good user experience to filter my fetched graduates array, with a function that finds out what unique community centers exist currently each time, and returns a set/array of them that I can display for dropdown options. <br/>
Considering that no other parts in our application needs that unique centers set, and I have no further use for it, I decided to save this data in my component’s locals state, and not in the redux store. After some googling, I found out that the best way will be to use useSelector to derive the list of unique centers that exist in the graduate’s list. 


  <Code language="javascript">
    //Graduates list from Redux store:
    const { graduates } = useSelector((state) => state.graduates);

    //Buildin a list of options for centers, taking only axisting centers in the graduates list:
    const centers = useSelector((state) => {
      const {graduates} = state.graduates;
      let centers = graduates?.map(graduate => graduate.center);
      return new Set(centers)
    });

    //Adding a "Select All" option:
    centers.add("הכל")

  </Code>

_you can read in the redux documentation more about [driving data with selectors](https://redux.js.org/usage/deriving-data-selectors)_

But still, I did not know how to implement the functionality of the user typing in search input and filtering my list based on that.


### _HTML Select Element_

At first, I checked what Figma tells me. It told me the UI wanted a select tag with all the centers.
After that, I asked in the next sync/team meeting, what do we want there? And the answer was: “we want the user to type, and the list to be filtered accordingly”. <br/>
Well, how do I do that? I started with what I know, the select tag. In react, in order to connect your select to the state, you need to:

1. Add a filtered-list state:

<Code language="javascript">
  //Filtered list:
  const [filteredGraduates, setFilteredGraduates] = useState([]);

  //The choosen center option:
  const [center, setCenter] = useState('הצג את כל המרכזים'); //deconstruct the set and [0], see codeSandBox

</Code>

2. Add your filtering functionality inside a useEffect, putting the center in the dependency array:

<Code language="javascript">
//Filtereing function, rendering the list everytime the user interacs with the select options:
useEffect(() => {
if (graduates?.length > 0) {
  const filteredGraduates = graduates?.filter(graduate => graduate.center === center)
  setFilteredGraduates(filteredGraduates)
}
}, [center])
</Code>

3. Add the select tag, mapping all the options you want to display in it.

![HTML select](https://res.cloudinary.com/db9i05s6n/image/upload/v1665324584/blog/select_jyvsn1.jpg "daList in React.js")


### _Data List for the rescue_

I went to good old [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) and went through the elements list, to see if there is something new, or maybe not so new but still I missed it.
The first thing that jumped to my eyes was the datalist HTML element.

### Fun Fact About DataLists😊

- _Only certain types of `<input>` support this behavior, and it can also vary from browser to browser. <br/> The types of input that support this behavior are:_

---

1. Text. <span style="color:blue">_Try it!_</span>

<label for="ice-cream-choice">Choose a flavor: </label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

---

2. Date & time. <span style="color:blue">_This one is super awsome:_</span>

<label for="time-choice">Choose you hour: </label>
<input type="time" list="popularHours" />
<datalist id="popularHours">

  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>

---

3. Range <span style="color:blue">_Wow_</span>

<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">

  <option value="0"></option>
  <option value="10"></option>
  <option value="20"></option>
  <option value="30"></option>
</datalist>

---

4. Color <span style="color:blue">_Cool_</span>

<label id="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">

  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>

---

5. Password (but it’s not supported by any browser for security reasons😊)

<label for="pwd">Enter a password:</label>
<input type="password" list="randomPassword" id="pwd" />
<datalist id="randomPassword">
<option value="5Mg[_3DnkgSu@!q#"></option>
</datalist>

---

- _the dropdown styles depend on the browser you are using. Here's an article about [how to customize your dataList](https://dev.to/siddev/customise-datalist-45p0)_

### Minor changes and - magic

![dataList](https://res.cloudinary.com/db9i05s6n/image/upload/v1665433496/blog/datalist_ftzare.jpg 'daList in React.js')

<blockquote>
  - *In order to bind the dataList input element to the control, we give it a unique identifier in the id attribute, and then add the list attribute to the `<input>` element with the same identifier as value.* 
  - *With React.js, you also need to add an onChange, in order to pass the event value to the state. I also mapped the set of centers I derived from the graduates list to the options.*

</blockquote>

### Result

![dataList](https://res.cloudinary.com/db9i05s6n/image/upload/v1665277435/blog/ui-datalist_mpeomq.jpg 'how it looks:)')

## _Implementing a Search Term_

That great! But not enough. What if a graduate wants to search for other graduates that work in a specific company, that he wants to apply to? There is no field representing the current title of the company someone works in. <br/>
We do have an option for free text, where the user can update at any given time up to 100 words about himself. So why not use that? Also, I think that a search by name will be very useful for the users in case someone remembers a specific name and want to get that person’s contact info. <br/>

---

<div className="purple">We need a free text search, that will go to different fields in the object, and filter out the graduates that pass the criteria.</div>

#### 1. Adding a filtered-list state, and a `searchTerm` to the components state (with `useState`):

<!-- <h3 style="color:blue">Adding a searchTerm to the components state (with useState):</h3> -->

<Code language="javascript">
  //Filtered list:
  const [filteredGraduates, setFilteredGraduates] = useState([]);

//Search Term:
const [searchTerm, setSearchTerm] = useState('');
</Code>

#### 2. Setting the state’s search term to the input value the user entered:

<Code language="javascript">
  //Handel the change:
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
</Code>

#### 3. The HTML input will be of type search, binding the value to the search term, handling the `onChange` event with our handelChange, and you can either put a placeholder or a label for a better user experience:

![Input Type Search](https://res.cloudinary.com/db9i05s6n/image/upload/v1665406881/blog/search-input_xoeu3b.jpg 'how it looks:)')

#### 4. Finally, the logic that connects everything together. There are a lot of variations to this, but this one works the best for me:

<Code language="javascript">
  //useEffect:
    useEffect(() => {
    if (graduates?.length > 0) {
      const filteredGraduates = graduates?.filter(graduate => {
        if (
          graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.workplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.eworkplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.erole?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.center.includes(searchTerm.toLowerCase())
        ) {
          return graduate
        }
        return null
      })
      setFilteredGraduates(filteredGraduates)
    }
  }, [searchTerm])
</Code>

### 5. It’s also useful if you extract your list to a separate component. Work’s best for filtering. I’ll put a codeSandBox at the end of this article.

> <div className="purple">Nicely Done! But still, our client wants cross-filtering in this app. It will be cool to have it. We have all the UI elements for it, just missing a little bit more logic.</div>

## _Cross Filter your Array_

How do I cross-filter my Array based on an `input` of type search and `select` element? I want the user to be able to filter all results to one category of the select dropdown menu and to be able to filter with our search input just from that one category, and not the whole list. How do I do that?
Googling did not help much, so I started a code sandbox, thinking of publishing the question on StackOverflow in the end, going for the wisdom of crowds.
But as usual, 99% of the time I start to put into words a coding question I have, the solution pops into my mind:

<Code language="javascript">
  //Extracted the functionality for cleaner code:
    const filterGraduates = () => {
    if (graduates?.length > 0 && center === 'הצג את כל המרכזים') {
      const filteredGraduates = graduates?.filter(graduate => {
        if (
          graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.workplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.eworkplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.erole?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.center.includes(searchTerm.toLowerCase())
        ) {
          return graduate
        }
        return null
      })
      // set the state:
      setFilteredGraduates(filteredGraduates)
    } else if (graduates?.length > 0 && center !== 'הצג את כל המרכזים') {
      const filteredGraduatesByCenter = graduates?.filter(graduate => graduate.center === center)
      const filteredGraduates = filteredGraduatesByCenter?.filter(graduate => {
        if (
          graduate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.workplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.eworkplace?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.erole?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          graduate.center.includes(searchTerm.toLowerCase())
        ) {
          return graduate
        }
        return null
      })
      setFilteredGraduates(filteredGraduates)
    }
  }
// Calling filterGraduates from useEffect:
  useEffect(() => {
    filterGraduates()
  }, [searchTerm, center])
</Code>

## _Wrapping Up_

