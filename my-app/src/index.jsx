import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Header,
  Menu,
  Sidebar,
  Icon,
  Segment,
  Image,
  Grid,
  GridColumn,
  SegmentGroup
} from 'semantic-ui-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class TopMenu extends React.Component {
  render() {
    return (
        <Container centered>
          <h1>TopMenu</h1>
        </Container>
    );
  }
}

class MidMenu extends React.Component {
  render() {
    return (
        <div>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
                as={Menu}
                animation='push'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
              <Menu.Item as='a'>
                <Icon name='home'/>
                Home
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='gamepad'/>
                Games
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='camera'/>
                Channels
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment.Group>
                <Header as='h3'>Charging Station A</Header>
                <Segment.Group horizontal raised>
                  <Segment>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                  </Segment>
                  <Segment>
                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png'/>
                  </Segment>
                </Segment.Group>
              </Segment.Group>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MidMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
