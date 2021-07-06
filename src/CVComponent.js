import React from 'react'

function CV(id) {
  var json = require('./CVs.json')
  const Person = json['en'][parseInt(id['id']) - 1]
  console.log(Person)
  var Meno = Person['name']
  var Age = Person['age']

  function Jobs() { //mapping Person's Jobs in json and pushing it to div
    return (Person['experience'].map((Job) => {
      return <> <div>{Job.name}</div><div>{Job.company}</div><div>{Job.start} - {Job.end}</div></>
    }))
  }
  
  function Education(){    //mapping Person's Education in json and pushing it to div
    return (Person['education'].map((School) => {
      return <> <div>{School.name}</div><div>{School.adress}</div><div>{School.start} - {School.end}</div></>
    }))
  }

  return (
    <div>
      <section id="about">
        <div>
          <h1>{Meno}</h1>
          <h3>{Age}</h3>
        </div>
      </section>
      <section id="Experience">
        <h2>Experience</h2>
        <div>        
          {Jobs()}
        </div>
      </section>
      <section id = "Education">
        <div>
          {Education()}
        </div>
      </section>
    </div>
/*
    <section id="education">
      <h2>Education</h2>
      <p>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <p>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </p>
    </section>

    <section id="contact">
      <h2>Interests</h2>
      <p>
        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </p>
    </section> 
    </div> */
  )
}

export default CV
