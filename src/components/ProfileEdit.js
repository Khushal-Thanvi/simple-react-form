import React, { useState }from "react";
import useStore from "../zu_store";
import {Form, Input, Button, Radio, Modal} from "antd";
import "antd/dist/antd.css";
import "../css/ProfileEdit.css"

function ProfileEdit() {
    
    // Get the person object from the store
    const store_person = useStore(state => state.person);
    
    // Define hooks for name, age and gender and get the setPerson function from the store.
    const setPerson = useStore(state => state.setPerson);
    const [name, setName] = useState(store_person.name);
    const [age, setAge] = useState(store_person.age);
    const [gender, setGender] = useState(store_person.gender);
   
    // A save function that dose basic validation and saves the form values to the store.
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

    // Hooks and function to manage the ant design model.
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
   
    return (
    <div id="profileedit">
        <p> Name: {store_person.name}
            <Input onChange={event => setName(event.target.value)} placeholder="Edit name"></Input>
        </p>
        <p> Age: {store_person.age}
            <Input onChange={event => setAge(event.target.value)} placeholder="Edit age"></Input>
        </p>
        <p> Gender: {store_person.gender} <br />
            <Radio.Group defaultValue={gender}>
                <Radio value="male" onClick={ () => setGender("male")} >Male</Radio>
                <Radio value="female" onClick={() => setGender("female")} >Female</Radio>
            </Radio.Group>
        </p>
        <Button type="primary" htmlType="submit" onClick={save}>Save to Store</Button>
        <Button type="primary" htmlType="submit" onClick={showModal}>View Store Values</Button>

        <Modal centered title="Your Profile" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <p>Name: {store_person.name}</p>
            <p>Age: {store_person.age}</p>
            <p>Gender: {store_person.gender}</p>
        </Modal>

    </div>
    );
}

export default ProfileEdit;