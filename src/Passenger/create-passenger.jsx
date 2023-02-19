import { Button, Checkbox, Form, Input,Row,Col,Card } from "antd";
import axios from "axios";

const CreatePassenger = () => {
    const onFinish=(values)=>{
        axios({
            method:"post",
            url:"https://api.instantwebtools.net/v1/passenger",
            data:values
        })
    }
    return ( 
        <>
        <Card title="Passenger Registration" style={{width:600,marginLeft:"400px",marginTop:"180px"}}>
        <Form name="pa
        ssenger"
         labelCol={{
          span: 10,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
        >
         <Row>
          <Col span="12">
        <Form.Item
          label="Passenger Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
            <Input />
        </Form.Item>
          </Col>
          <Col span="12">
        <Form.Item
          label="Trips"
          name="trips"
          rules={[
            {
              required: true,
              message: "Please input your number of trips!",
            },
          ]}
        >
            <Input />
        </Form.Item>
          </Col>
      </Row>
      <Row>
          <Col span="12">
              <Form.Item label="Airlines" name="airline"
              rules={[
            {
              required: true,
              message: "Please input your number of airlines!",
            },
          ]}>
          <Input />
              </Form.Item>
          </Col>
      </Row>
      <Button htmlType="submit" type="primary">Submit</Button>
        </Form>
        </Card>
        </>
     );
}
 
export default CreatePassenger;