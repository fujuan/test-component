import React, {Component} from 'react';
import { Dialog, Button } from 'common-custom-f'
import { Input } from 'antd'
import './index.less'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        const { visible } = this.state
        return (
            <div className={'border'}>
                <Input />
                <Button label={'open'} onClick={() => this.setState({ visible: true })}></Button>
                { visible && <Dialog
                    visible={visible}
                    width={'80%'}
                    title={'今天天气很好哦'}
                    onOk={() => this.setState({ visible: false })}
                    onCancel={() => this.setState({ visible: false })}
                >
                    <h3 style={{ textAlign: 'left'}}>明明今年的天气就很好，今天是阴天</h3>
                </Dialog>}
            </div>
        );
    }
}

export default Index;
