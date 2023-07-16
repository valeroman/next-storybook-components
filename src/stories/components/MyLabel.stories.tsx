
import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from '../../components/MyLabel';

  
  const meta: Meta<typeof MyLabel> = {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
      size: {control: 'select'},
      color: { control: 'select' },
      fontColor: { control: 'color' }
    },
    tags: ['autodocs'],
  };
  
  export default meta;
  
  const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel { ...args }/>;

  export const Basic = Template.bind({});
  Basic.args = {
    size: 'normal',
    allCaps: false,  // true: capitalizar todala palabra 
  }

  export const AllCaps = Template.bind({});
  AllCaps.args = {
    size: 'normal',
    allCaps: true,
  }

  export const Secondary = Template.bind({});
  Secondary.args = {
    size: 'normal',
    color: 'secondary'
  }

  export const Tertiary = Template.bind({});
  Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
  }

  export const CustomFontColor = Template.bind({});
  CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
  }