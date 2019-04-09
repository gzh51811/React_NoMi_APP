import React, { Component } from 'react';
import { Statistic,Card, Row, Col, Icon } from 'antd';

class Home extends Component {
    render() {
        return <div className="home">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="本月票房" value={1678212128} prefix={<Icon type="like" />} />
                </Col>
                <Col span={12}>
                    <Statistic title="本月档期" value={93} suffix="/ 100" />
                </Col>
            </Row>
            <div style={{ background: '#ECECEC', padding: '30px' ,marginTop:'20px'}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Active"
                                value={11.28}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card>
                            <Statistic
                                title="Idle"
                                value={9.6}
                                precision={2}
                                valueStyle={{ color: '#3f8600' }}
                                prefix={<Icon type="arrow-up" />}
                                suffix="%"
                            />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    }
}
export default Home;