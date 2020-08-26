# Front-End-Test

## Question 1 Ans.

I spent approximetly 1 hour for the assignment. In my opinion i would have made following addition to the project mainly :

- I can use redux to store API data instead of calling API every time.
- Instead of calling API in that page i can make service folder and use that API directly in page.
- I would have modified the API because there was an issue with refine sarch that I was not able to gain access to name and city only but not street and area.
- I would have been able to create pagination in case of multiple datas for avoid scrolling.
- Instead of search(Name,Area,Street), filter would be more effective.

## Question 2 Ans.

## Question 3 Ans.

We can track down the perfomance of the project by bifurcating the errors into respective parts such as front-end, back-end, network issue etc and resolved the issue respectively. I have done this in my previous project.

## Question 4 Ans.

In current API there are lot of fields of name,street,area etc.Instead of these multiple fields we can create an object of address and include address related field in that object.

## Question 5 Ans.

{
"id":4162,
"name":"Orsay",
"phone":"2125176400x0",
"price":3,
"reserve_url":"http://www.opentable.com/single.aspx?rid=4162",
"mobile_reserve_url":"http://mobile.opentable.com/opentable/?restId=4162",
"image_url":"https://www.opentable.com/img/restimages/4162.jpg",
"addressInfo":{
"id":1,
"address":"1057-59 Lexington Avenue",
"city":"New York",
"state":"NY",
"area":"New York / Tri-State Area",
"postal_code":"10021",
"country":"US",
"lat":40.772397,
"lng":-73.960762
}
}
