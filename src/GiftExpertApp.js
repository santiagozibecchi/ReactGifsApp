import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GiftExpertApp = () => {

      const [categories, setCategories] = useState(['One Punch'])

      // const handdleAdd = () => {
      //       setCategories([...categories, 'Hunter']);
      //       setCategories(c => [...c, 'Hunter']);
      // }



      return (
            <>
                  <h2>GiftExpertApp</h2>
                  <AddCategory setCategories={setCategories}/>

                  <hr />


                  <ol>
                        {
                              categories.map(category => (
                                    <GifGrid 
                                    key={category}
                                    category={category}/>
                              ))
                        }
                  </ol>



            </>
      )
}

export default GiftExpertApp
