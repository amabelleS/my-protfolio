# In Progress!! not done:)
# Filtering with React.js & the HTML Data List Element

How do you filter your data with React.js? What HTML element are best for my application? How can I filter different data fields with combined search? This article will try to answer those questions, and assist junior developers with there first steps:)

  Contents:
  - [Filtering with react](#filtering-with-react)
  - [HTML Select tag](#html-select-tag)
  - [Driving data from redux store:](#driving-data-from-redux-store)
  - [Data List for the rescue](#data-list-for-the-rescue)
  - [Free Text Filtering](#free-text-filtering)


This is something people (including me) sometimes struggle with. Working on a junior’s project, building an app for the graduates of “Educating for Excellence” - a non-profit organization that strives to reduce socioeconomic disparity in the geographic periphery of Israeli society – I was given an assignment, to filter the graduates by their community center title, and/or occupation. We are working with React.js (JavaScript) on the client’s side and node.js + SQL on the server side. 
Volunteering on a junior’s project, we are in a learning process😊 Sometimes we don’t have CI-CD processes, structured and written planning, or goals. Sometimes there is no clear assignment or project management, and you just Have to figure things out for yourself, micro and macro-wise. So, although my task is to do this specific thing, I always try to understand the big pic. 
When the developer that works on the back-end told me he wrote a different function for each filter, that goes to multiple SQL tables in order to retrieve filtered data, and that as a result, the filtered data is far from complete or of any use to the user, I suggested trying the filtering on the front-end. The obvious advantage is optimization, I don’t want to do a server call, and then multiple calls to different tables, when I can put it all inside one useEffect😊 Another advantage is user experience – it will take a lot of time! So, it’s safe to say that if you do not have a good reason, do your filtering in the front end, on the array/list you already have. 
So now I needed to do some filtering with React😊 


 ## Filtering with react

  Actually, we also work with redux-toolkit, which is wonderful, but, there is no need to use the filtered graduate’s list in other components across the app, so I choose to do it directly within my component. 
  I am working now on one section out of four. In our application, after registration and logging in, the user will be directed to the home page, which contains the dashboard. The main part is a feed of the last updates, of four kinds: new jobs, events, scholarships, and graduate’s index. From the feed, you can navigate to a designated page for each category. There, the user will be able to filter the category list. I need to implement the functionality for filtering the graduate’s list by community center title.  I also know there are 121 community centers, and many of them are no longer functional.
  My assignment now is to filter by the center. But we do not know yet what kind of other filters we will have for the MVP version. Filtering by the center is a definite requirement from our client. But what will be best for the user experience? So, I know that there probably will be a requirement to filter something else, that is cross-filtering. I need to make prep for AC here😊

  There are also constraints influenced by the object you play with. The graduate object contains different fields we can filter by. So, maybe the best user experience will be filtering by the name of the company someone works in because I graduate user will want to apply there. Or by geographic location. But I just do not have those fields in the user object. But I do have a field where the user can update free text, that is any information he wants to display on his index card. So, we can work with that.
  Working on an MVP version, no one knows how the user will react to the website. We want them to find the site useful, easy, and fun to use, and to have value for them – and that is where “good” filtering is essential to a good user experience. 

## HTML Select element

  At first, I checked what Figma tells me. It told me the UI wanted a select tag with all the centers. 
  After that, I asked in the next sync/team meeting, what do we want there? And the answer was: “we want the user to type, and the list to be filtered accordingly”. 
  Well, how do I do that? I started with what I know, the select tag. In react, in order to connect your select to the state, you need to: 
  
  1. Add a filtered-list state, and a `searchTerm` to the components state (`useState`):

  <Code language="javascript">
    //Filtered list:
    const [filteredGraduates, setFilteredGraduates] = useState([]);

    //Search Term:
    const [searchTerm, setSearchTerm] = useState('');
  </Code>


  2. Add your filtering functionality inside a useEffect, putting the searchTerm in the dependency array:

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




## Driving data from redux store:

  So Many Options🤯 - 121 options in my case. But only 6 of them are relevant to the user now – the list will grow as more users will register for the app. Yet I do not want to overload the user with unnecessary information. So I used `useSelector` to derive the list of centers that exist in the graduate’s list, that is, only community centers connected to users that are registered will appear in the center select options list. 

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

  *you can read in the redux documentation more about [driving data with selectors](https://redux.js.org/usage/deriving-data-selectors)*


  But still, I did not know how to implement the functionality of an input search element combined with a dropdown who get's filtered. 

## Data List for the rescue

  I went to good old [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) and went through the tags list, to see if there is something new, or maybe not so new but still I missed it. 
  The first thing that jumped to my eyes was datalists. 


### Minor changes and - magic

  ![dataList](https://res.cloudinary.com/db9i05s6n/image/upload/v1665274898/blog/datalist_gvet4x.jpg "daList in React.js")

<blockquote>
  *In order to bind the dataList input element to the control, we give it a unique identifier in the id attribute, and then add the list attribute to the `<input>` element with the same identifier as value.* 
</blockquote>
  
### Fun Fact About DataLists😊

* *Only certain types of `<input>` support this behavior, and it can also vary from browser to browser. The types of input that support this behavior are:*

----------

1. Text. <span style="color:blue">*Try it!*</span>

<label for="ice-cream-choice">Choose a flavor: </label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice">

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>

----------

2.	Date & time. <span style="color:blue">*This one is super awsome:*</span>
  
<label for="time-choice">Choose you hour: </label>
<input type="time" list="popularHours" />
<datalist id="popularHours">
  <option value="12:00"></option>
  <option value="13:00"></option>
  <option value="14:00"></option>
</datalist>

---------

3.	Range <span style="color:blue">*Wow*</span>

<label for="tick">Tip amount:</label>
<input type="range" list="tickmarks" min="0" max="100" id="tick" name="tick" />
<datalist id="tickmarks">
  <option value="0"></option>
  <option value="10"></option>
  <option value="20"></option>
  <option value="30"></option>
</datalist>

--------------

  4.	Color <span style="color:blue">*Cool*</span>

  <label id="colors">Pick a color (preferably a red tone):</label>
<input type="color" list="redColors" id="colors" />
<datalist id="redColors">
  <option value="#800000"></option>
  <option value="#8B0000"></option>
  <option value="#A52A2A"></option>
  <option value="#DC143C"></option>
</datalist>

---------------

  5.	Password (but it’s not supported by any browser for security reasons😊)

  <label for="pwd">Enter a password:</label>
  <input type="password" list="randomPassword" id="pwd" />
  <datalist id="randomPassword">
    <option value="5Mg[_3DnkgSu@!q#"></option>
  </datalist>

--------------

* *the dropdown styles depend on the browser you are using. Here's an article about [how to customize your dataList](https://dev.to/siddev/customise-datalist-45p0)*
 

### Result
  ![dataList](https://res.cloudinary.com/db9i05s6n/image/upload/v1665277435/blog/ui-datalist_mpeomq.jpg "how it looks:)")



## Free text filtering
That great! But not enough. What if a graduate wants to search for other graduates that work in a specific company, that he wants to apply to?  There is no field representing the current title of the company someone works in. 
We do have an option for free text, the user can update at any given time up to 100 words about himself. So why not use that? 
Also, a basic search that seems to me a must here, is a search by name. I wanna look for my besty, I remember her name. We need an open text search, that will go to different fields in the object, and filter out the graduates that pass the criteria. 
```code```

## Combined search

## Summery

  
  
<!-- 2. Select a random element

<Code language="javascript">
const items = ["Ball", "Bat", "Cup"]
const randomIndex = Math.floor(Math.random()*items.length)
items[randomIndex]
</Code>

3. Reverse a string

<Code language="javascript">
function reverseString(string) {
  return string.split(" ").reverse().join(" ")
}

revereseString("Random String")
</Code>

4. Check if element has a class

<Code language="javascript">
const element = document.querySelector("#element")
element.classList.contains("active")
</Code>

5. String interpolation

<Code language="javascript">
const name = "Jaya"
console.log(`Hi, ${name}. You have ${2 ** 3} new notifications.`}
//Hi, Jaya. You have 8 new notifications.
</Code>

6. Loop through an array

<Code language="javascript">
const cars = ["Ford", "BMW", "Audi" ]
for (let car of cars) {
  console.log(car)
}

/*
Ford
BMW
Audi
*/
</Code>

7. Get current time

<Code language="javascript">
const date = new Date()
const currentTime = 
  `${date.getHours()}:${date.getMintues()}:${date.getSeconds()}`

console.log(currentTimes)
//example output: "22:16:41"
</Code>

8. Replace part of a string

<Code language="javascript">
const string = "You are awesome."
const replacedString = string.replace("You", "We")

console.log(replacedString) //Output: "We are awesome"
</Code>

9. Destructing variable assignment

<Code language="javascript">
let profile = ['bob', 34, 'carpenter'];
let [name, age, job] = profile;
console.log(name);
// bob
</Code>

10. Using the spread operator

<Code language="javascript">
let data = [1,2,3,4,5];
console.log(...data);
//  1 2 3 4 5
let data2 = [6,7,8,9,10];
let combined = [...data, ...data2];
console.log(...combined);
// 1 2 3 4 5 6 7 8 9 10
console.log(Math.max(...combined));
// 10
</Code> -->