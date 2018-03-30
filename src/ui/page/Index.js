import React from 'react';
import { Button, Modal } from 'antd'
import {toJS} from "mobx";
import {observer} from 'mobx-react';
import Model from '../../store/mobx/TestModel';
@observer
class Index extends React.Component {
    render() {
        return (
            <div>
                这是显示的标题:{Model.title}
                <Button onClick={Model.changeTitle.bind(Model)}>修改title</Button></div>
        )
    }
}
export default Index;