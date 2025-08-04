import React, { useEffect, useState } from 'react'
import './Meal.css'

const Meal = () => {

  const [mealdata, setmealdata] = useState([])
  const [area, setarea] = useState('indian')
  const [inputdata, setinputdata] = useState('')
  useEffect(() => {


    const Fetchdatafromapi = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      const data = await api.json();
      console.log(data);
      setmealdata(data.meals)

    }

    Fetchdatafromapi();


  }, [area])


  const Submithandler = async (e) => {
    e.preventDefault();
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputdata}`)
    const data = await api.json();
    console.log(" search data =", data.meals);
    setmealdata(data.meals)

  }
  return (
    <>
      <div className='mx-auto text-center my-button mx-auto mt-3 '>
        <button
          onClick={() => setarea('indian')}
          type="button" className="btn btn-outline-primary mx-3">Indian</button>
        <button
          onClick={() => setarea("Canadian")}
          type="button" className="btn btn-outline-warning mx-3">Canadian</button>
        <button
          onClick={() => setarea("American")}
          type="button" className="btn btn-outline-light mx-3">American</button>
        <button
          onClick={() => setarea("Thai")}
          type="button" className="btn btn-outline-info mx-3">Thai</button>
        <button
          onClick={() => setarea("british")}
          type="button" className="btn btn-outline-warning mx-3">British</button>
        <button
          onClick={() => setarea("Russian")}
          type="button" className="btn btn-outline-info mx-3">Russain</button>


      </div>
      <form onSubmit={Submithandler} className='mx auto text-center my-3'>
        <input onChange={(e) => setinputdata(e.target.value)} type="text" /></form>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        {mealdata.map((data) => (
          <div key={data.idMeal} style={{ textAlign: 'center' }}>
            <div>
              <img src={data.strMealThumb} style={{ width: '220px', borderRadius: '10px', border: '2px solid red' }} />
            </div>
            <h5 style={{ maxWidth: '300px' }}>{data.strMeal}</h5>
          </div>
        ))}
      </div>

    </>
  );
}

export default Meal