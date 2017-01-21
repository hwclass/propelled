// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';

// Components
import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Save from 'grommet/components/icons/base/Save';

// Actions
import * as actions from '../../actions/';

// Utilities
import isObjectEmpty from '../../utils/isObjectEmpty';

// Constants
import { DEFAULT_ANIMATION, ZOOM } from '../../constants/map';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.buildUserOptions = this.buildUserOptions.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();

    const userOptions = this.buildUserOptions(
                          ReactDOM.findDOMNode(this.refs.name).value,
                          parseFloat(ReactDOM.findDOMNode(this.refs.lat).value),
                          parseFloat(ReactDOM.findDOMNode(this.refs.lng).value),
                          ReactDOM.findDOMNode(this.refs.location).value
                        );

    if (!!userOptions) {
      actions.saveUser(userOptions);
    }
  }

  buildUserOptions(name, lat, lng, location) {
    const userOptions = {
      name,
      position: {
        lat,
        lng
      },
      location
    };

    if (isObjectEmpty(userOptions)) {
      return false;
    }

    userOptions.key = uuid.v4();
    userOptions.defaultAnimation = DEFAULT_ANIMATION;
    userOptions.zoom = ZOOM;

    return userOptions;
  }

  render() {
    return (
      <div>
        <Form method="post">
          <Header>
            <Heading tag="h3" strong>
              Enter a Location
            </Heading>
          </Header>
          <FormFields>
            <FormField label="Name">
              <TextInput id="name"
                name="name"
                ref="name"
              />
            </FormField>
            <FormField label="Latitude">
              <TextInput id="lat"
                name="lat"
                ref="lat"
              />
            </FormField>
            <FormField label="Longitude">
              <TextInput id="lng"
                name="lng"
                ref="lng"
              />
            </FormField>
            <FormField label="Location">
              <TextInput id="location"
                name="location"
                ref="location"
              />
            </FormField>
          </FormFields>
          <Footer pad={{ vertical: "small" }}>
            <Button
              icon={<Save />}
              label="Add Location with User"
              type="submit"
              onClick={this.onHandleSubmit}
            />
          </Footer>
        </Form>
      </div>
    );
  }
}
