import React, { useEffect, useState } from 'react';
import HomeContentCards from '../../HomeComponents/HomeContentCards';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import Footer from '../NavbarComp/Footer';
import Hero from '../../HomeComponents/HeroComponents/Hero';

export const Home = () => {

    const [Data, setData] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState("");
    const { search } = useOutletContext();

    // Filter: search + category
    const filteredData = Data.filter((item) => {

        const titleLower = item.title.toLowerCase();
        const categoryLower = item.category.toLowerCase();

        const matchesSearch = search
            ? titleLower.includes(search.toLowerCase())
            : true;

        const matchesCategory = categoryFilter
            ? categoryLower === categoryFilter.toLowerCase()
            : true;

        return matchesSearch && matchesCategory;
    });

    // Fetch products
    async function fetchData() {
        try {
            const response = await axios("https://fakestoreapi.com/products");
            setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // FakeStore API categories
    const categories = [...new Set(Data.map(item => item.category))];

    return (
        <>
        <Hero/>
            <div className="w-full bg-black pt-16 flex flex-col items-center gap-6">

            {/* Category Buttons */}
            <div className="flex gap-4 mb-8 flex-wrap justify-center br-5">

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setCategoryFilter(cat)}
                        className={`px-4 py-2 rounded font-semibold ${
                            categoryFilter.toLowerCase() === cat.toLowerCase()
                                ? 'bg-grey-500 text-white'
                                : 'bg-green-500 text-white hover:bg-blue-600'
                        } transition`}
                    >
                        {cat}
                    </button>
                ))}

                {/* Clear button
                <button
                    onClick={() => setCategoryFilter("")}
                    className="px-4 py-2 rounded font-semibold bg-red-500 text-white hover:bg-red-600 transition"
                >
                    Clear
                </button> */}

            </div>

            {/* Products */}
            <div className="flex flex-wrap gap-x-16 gap-y-20 justify-center">

                {filteredData.length > 0 ? (

                    filteredData.map((items) => (
                        <HomeContentCards
                            key={items.id}
                            ImageUrl={items.image}
                            title={items.title}
                            description={items.description}
                            price={items.price}
                            id={items.id}
                        />
                    ))

                ) : (
                    <p className="text-white text-lg">No products found.</p>
                )}

            </div>

            <Footer />

        </div>
        </>
    );
};









































// import React, { useEffect, useState } from 'react'
// import HomeContentCards from '../../HomeComponents/HomeContentCards'
// import axios from 'axios'
// import {  useOutletContext } from 'react-router-dom'
// import Footer from '../NavbarComp/Footer'

// export const Home = () => {
//     let [Data, setdata] = useState([])

//     let {search} = useOutletContext()
//     console.log("sitting in class" + search)

//     // const filteredData = Data.filter((item) =>
//     //  item.title.toLowerCase().includes(search.toLowerCase())
//     // )
//     const filteredData = Data.filter((item) =>
//         item.title.toLowerCase().includes(search?.toLowerCase() || "")
//     )

//     console.log("Filtered Data:", filteredData)

// // another way 
// //           let handlesearch = data.filter((items) => { 
// //          return items.catergory.toLowerCase().includes(search.toLowerCase())
//               //let displayData = handlesearch.lenght>0 ? handlesearch : data

//    // let {message}= useOutletContext()
    
        
//          async function fetchdata(){
//             // let data = await fetch("https://fakestoreapi.com/products")
//             // let finaldata = await data.json()
//             // setdata(finaldata)


//             let data = await axios("https://fakestoreapi.com/products")
//             setdata(data.data)
//             //console.log(finaldata)
//         }
//        // fetchdata()
    
//        useEffect(()=>{
//         fetchdata()
//        },[])
//        //console.log(Data)
//        console.log("API DATA:", Data)


        
//       return (
//         <div className='w-full bg-black flex flex-wrap gap-y-20 gap-x-16 items-center justify-center pt-16'>
//             {/* {handlesearch.map ..same all} */}
//             {filteredData.map((items)=>
//                     <HomeContentCards  key={items.id}  ImageUrl = {items.image} title = {items.title}
//                     description ={items.description}
//                     price = {items.price} 
//                     id = {items.id}/>
        
//             )}
//             <Footer/>
//         </div>
//         // <>
//         // <h1>{message}</h1>
//         // </>
//       )}



  