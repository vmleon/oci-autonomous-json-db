import React from "react";
import { List } from 'antd';

function Books({children: data}) {
  return <List
    itemLayout="horizontal"
    dataSource={data.books}
    renderItem={({ title, author }) => (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{title}</a>}
          description={author}
        />
      </List.Item>
    )}
  />
}

export default Books;