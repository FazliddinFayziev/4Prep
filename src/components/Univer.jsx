import React from 'react'


const Univer = () => {

  const data = [
    { id: 0, img: 'img.com' }
  ]

  return (
    <div className="slider">
      <div className="slide-track">
        {data.map((slide) => {
          const { id, img } = slide
          return (
            <div key={id} className="slide">
              <div>
                <img src={img} alt="" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Univer
