import { useSelector } from 'react-redux';
import React from 'react';
import "../css/listItem.css";



const ListItem = (props) => {
    
    const LIST = useSelector(state => state.listItem.list);
    const valueSearch = useSelector(state => state.listItem.search)
    const valueActive = useSelector(state => state.listItem.active)
    const valueCategories = useSelector(state => state.listItem.categories)
    const valueSkillss = useSelector(state => state.listItem.skillss)
    const valueServices = useSelector(state => state.listItem.services)
    console.log(valueSearch,valueCategories,valueSkillss,valueServices)


    
    const filterItem = LIST.filter(el =>( 
        valueSearch == "" ? true : el.displayName.toLowerCase().indexOf(valueSearch.toLowerCase()) == -1 ? false :true )).filter(el =>(
        valueActive == "Status" ? true : el.online.indexOf(valueActive) > -1 ? true : false
       )).filter(el =>( valueCategories == "categoriesCollection" ? true : el.categoriesCollection.items.filter(i =>{ return i.displayName == valueCategories}).length != 0
        )).filter(el =>( valueServices == "servicesCollection" ? true : el.servicesCollection.items.filter(i =>{ return i.name == valueServices}).length != 0
        )).filter(el =>( valueSkillss == "skillsCollection" ? true : el.skillsCollection.items.filter(i =>{ return i.displayName == valueSkillss}).length != 0
        ))
console.log(filterItem)

   return (
        <div className="container">
            <table className="table mt-5 table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Avatar</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                
                   filterItem.map((item,index) =>
                      
                        <tr key={index}>
                            <th scope="row"><img alt= "" src={item.avatarUrl==null ? "" : item.avatarUrl.url}  style={{width:"50px",height:"50px",borderRadius:"50%"}}/></th>
                            <td>{item.displayName} </td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td><img alt= "" src={item.online === "true" ?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy-gGvNEW0irPRCN3rPrP2f5UjJ7er09pBl9oTDj7MU3-5Ad3VLe931E1k50CT8ZzTt-U&usqp=CAU" : "data:image/png;base64,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"  }style={{width:"25px",height:"25px",borderRadius:"50%",marginLeft:"10px"}}/></td>
                        </tr>
                        )
                    }
                 
                </tbody>
            </table>
        </div>
    );
};





export default ListItem;
