// Import react, zustand store and required components from ant design library

import React, { useState } from "react";
import {Form, Input, Button, Radio} from "antd";
import "antd/dist/antd.css";
import useStore from "../zu_store";
import { Link, Redirect} from "react-router-dom";
import "../css/OnBoard.css"

export default function OnBoard({ style = {}, totalStars = 5, ...props }) {

    // Define state hooks for name, age and gender and get the setPerson function from the zustand store.

    const setPerson = useStore(state => state.setPerson);
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("Male");
    
    // A save function that does basic validation and saves the filled values to the store.

    const save = () => {
        if (!name) {
            alert("Name is required");
        }
        else if (!age) {
            alert("Age is required");
        }
        else {
            setPerson({name: name, age: age, gender: gender});
        }
    };
    
	return (
        <div id="Form">
		<Form>
            <Form.Item label="User name" name="username">
                <Input required onChange={event => setName(event.target.value)} placeholder="User name"></Input>
            </Form.Item>
            <Form.Item label="Age" name="age">
                <Input required onChange={event => setAge(event.target.value)} placeholder="age"></Input>
            </Form.Item>
            <Form.Item>
                <Radio.Group defaultValue="male">
                    <Radio value="male" onClick={ () => setGender("male")} >Male</Radio>
                    <Radio value="female" onClick={() => setGender("female")} >Female</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item>
                <Link to="/edit">
                    <Button type="primary" htmlType="submit" onClick={save}>Continue</Button>
                </Link>
            </Form.Item>
        </Form>
        </div>
	);
}