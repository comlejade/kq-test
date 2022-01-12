import * as React from 'react';
import { View, Text, Image } from 'remax/wechat';
import { Form, FormItem, ReInput, TransferChange, Space, Button } from '@kqinfo/ui';
import styles from './index.css';

export default () => {
  const [form] = Form.useForm()

  // const onClick = () => {
  //   console.log('clicked')
  //   setTimeout(() =>{
  //     form.setFieldsValue({phone: '13816081426'})
  //   }, 0)
  // }

  const onSubmit = () => {
    form.validateFields().then(values => {
      console.log(values)
    })
  }

  return (
    <Form form={form} cell>
      <FormItem label={'当前体温'} name={'temperature'} rules={[{ required: true, type: 'number' }]} />
      {/* <FormItem
        label={'手机号'}
        name={'phone'}
        rules={[{required: true}]}
        childrenAlign={'left'}
      >
        <TransferChange>
          {(onChange, value) => (
            <Space size={10} alignItems={'center'}>
              <ReInput value={value} onChange={onChange} placeholder={'请输入手机号'} />
              <Button size="action" type="primary" onTap={onClick}>一键获取</Button>
            </Space>
          )}
        </TransferChange>
      </FormItem> */}
      <Button type='primary' onTap={onSubmit}>提交</Button>
    </Form>
  );
};
