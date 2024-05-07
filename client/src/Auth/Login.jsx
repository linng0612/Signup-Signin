import React from 'react';
import {Card,Flex, Form, Typography,Input, Button, Alert, Spin} from "antd";
import { Link } from 'react-router-dom';
import loginImage from '../assets/login.png';
import useLogin from '../hooks/useLogin';

const Login = () => {
  const{error, loading, loginUser} = useLogin();
  const handleLogin = async (values) => {
    await loginUser(values);
  };
  return (
    <Card className="form-container">
        <Flex gap="large" align="center">
            {/* images */}
            <Flex flex={1}>
                <img src={loginImage} className="auth-image" />
            </Flex>
            {/* form */}
            <Flex vertical flex={1}>
                <Typography.Title level={3} strong className="title">
                    Login
                </Typography.Title>
                <Typography.Text type="secondary" strong className="slogan">  
                    Welcome you to join with us!
                </Typography.Text>
                
                <Form layout="vertical" onFinish={handleLogin} autoComplete='off'>
                    
                    

                    <Form.Item label="Email" name="email" rules={[{
                        required: true,
                        message: 'Please input your email!'
                    },{
                        type: 'email',
                        message: 'Please enter a valid email!'
                    }]}> 
                        <Input size='large' placeholder="Enter your Email" />
                    </Form.Item>

                    <Form.Item label="Password" name="password" rules={[{
                        required: true,
                        message: 'Please input your password!'
                    }]}> 
                        <Input.Password size='large' placeholder="Enter your password" />
                    </Form.Item>
                    

                    {
                        error && (<Alert description={error} type="error" showIcon closable className="alert" />)
                    }

                    <Form.Item>
                        <Button 
                        type={`${loading ? '' : 'primary'}`} 
                        htmlType="submit" size="large" className="btn">
                            {loading ? <Spin/> :'Sign In'}
                            
                            </Button>
                    </Form.Item>

                    <Form.Item>
                        <Link to="/">
                        <Button size="large" className="btn">Register</Button>
                        </Link>
                        
                    </Form.Item>
                </Form>

            </Flex>


            
        </Flex>
    </Card>
  )
}

export default Login