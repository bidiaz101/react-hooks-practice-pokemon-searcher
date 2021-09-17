import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({pokemon, setPokemon}) {
  const[name, setName] = useState("")
  const[hp, setHp] = useState(0)
  const[frontUrl, setFrontUrl] = useState("")
  const[backUrl, setBackUrl] = useState("")

  function handleSubmit(e) {
    const formData = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      },
      id: pokemon.length+2
    }
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(formData)
    })
    .then(() => setPokemon([...pokemon, formData]))
    e.target.reset()
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setName(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => setHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setFrontUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setBackUrl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
