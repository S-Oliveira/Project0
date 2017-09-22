import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Box from '../common/widget/box'
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Something' small='litle Something' />
        <Content>
          <Row>
            <Box cols='12 4' color='green' icon='coffee'
              value='coffee break' text='0,50€' />
            <Box cols='12 4' color='red' icon='rss-square'
              value='free-wifi' text='Pass:qwerty' />
            <Box cols='12 4' color='blue' icon='beer'
              value='Thirsty?' text='Happy Hour 18H' />
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard
