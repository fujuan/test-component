import React from 'react';
import { action } from '@storybook/addon-actions';
import Task  from './Task';

export default {
    title: 'Task',
    component: Task,
    argTypes: {
        state: { control: 'state' },
    },
};

const Template = (args) => <Task {...args} />;

const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
}
export const Default = Template.bind({});
Default.args = {
    task: {
        state: "TASK_ARCHIVED",
        id: 1,
        title: '我是default'
    },
    ...actions
};

export const Active = Template.bind({});
Active.args = {
    task: {
        state: "ACTIVE",
        id: 2,
        title: '我不是default'
    },
    ...actions
};

