import React from 'react'
import propTypes from 'prop-types'
import { Card, List, Button } from 'antd'
import { StopOutlined } from '@ant-design/icons'

function FollowList({ header, data }) {
  return (
    <div>
      <List
        style={{ marginBottom: 20 }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size='small'
        header={<div>{header}</div>}
        loadMore={
          <div style={{ textAlign: 'center', margin: '10px 0' }}>
            <Button>More</Button>
          </div>
        }
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ marginTop: '20' }}>
            <Card actions={[<StopOutlined key='stop' />]}>
              <Card.Meta description={item.name} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  )
}

FollowList.propTypes = {
  header: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
}

export default FollowList
