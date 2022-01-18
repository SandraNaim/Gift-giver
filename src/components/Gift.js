import React, {Component} from "react";
import { Form, FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";

class Gift extends Component {
    constructor(){
        super();
        this.state = {
            person: '',
            present: ''
        }
    }

    render(){
        return(
            <div className="gift">
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl 
                            data-test="person-input"
                            onChange={(evt) => this.setState({ person: evt.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl 
                            data-test="present-input"
                            onChange={(evt) => this.setState({ present: evt.target.value })}
                        />
                    </FormGroup>
                </Form>
                <Button
                    data-test="remove-button"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        )
    }
}

export default Gift;