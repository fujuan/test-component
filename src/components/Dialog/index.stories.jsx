import React from 'react';

import Index from './index';
import { action } from "@storybook/addon-actions";

export default {
    title: 'Dialog',
    component: Index,
};


const Template = (args) => <Index {...args} />;
const actions = {
    onOk: action('onOk'),
    onCancel: action('onCancel'),
}
export const Default = Template.bind({});
Default.args = {
    visible: true,
    title: '我是dialog',
    width: 500,
    type: 'default',
    ...actions,
};

export const Confirm = Template.bind({})
Confirm.args = {
    visible: true,
    title: '提示',
    content:  '确定要删除？',
    type: 'confirm',
    ...actions
}
