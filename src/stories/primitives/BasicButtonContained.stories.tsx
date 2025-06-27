import type { Meta, StoryObj } from "@storybook/react";
import { IconPlus, IconActivity, IconArrowLeft } from "icons";
import { BasicButtonContained } from "primitives";

const meta: Meta<typeof BasicButtonContained> = {
  component: BasicButtonContained,
  title: "SDS Primitives/Basic Button Contained",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "一个基础的容器按钮组件，支持多种类型、尺寸、状态和图标配置。基于 Figma 设计规范实现。"
      }
    }
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "auxillary", "white"],
      description: "按钮类型",
    },
    size: {
      control: { type: "select" },
      options: ["small", "middle", "large"],
      description: "按钮尺寸",
    },
    state: {
      control: { type: "select" },
      options: ["normal", "press", "disable"],
      description: "按钮状态",
    },
    icon: {
      control: { type: "boolean" },
      description: "是否显示图标",
    },
    text: {
      control: { type: "text" },
      description: "按钮文本",
    },
    buttonType: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "HTML button type",
    },
  },
};
export default meta;

export const Default: StoryObj<typeof BasicButtonContained> = {
  name: "默认",
  args: {
    type: "primary",
    size: "middle",
    state: "normal",
    text: "主按钮",
    icon: false,
  },
};

export const WithIcon: StoryObj<typeof BasicButtonContained> = {
  name: "带图标",
  args: {
    type: "primary",
    size: "middle",
    state: "normal",
    text: "添加",
    icon: true,
    ic: <IconPlus />,
  },
};

export const AllSizes: StoryObj<typeof BasicButtonContained> = {
  name: "所有尺寸",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BasicButtonContained type="primary" size="small" state="normal" text="小按钮" />
      <BasicButtonContained type="primary" size="middle" state="normal" text="中按钮" />
      <BasicButtonContained type="primary" size="large" state="normal" text="大按钮" />
    </div>
  ),
};

export const AllTypes: StoryObj<typeof BasicButtonContained> = {
  name: "所有类型",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BasicButtonContained type="primary" size="middle" state="normal" text="Primary" />
      <BasicButtonContained type="auxillary" size="middle" state="normal" text="Auxillary" />
      <div style={{ backgroundColor: "#f0f0f0", padding: "8px", borderRadius: "4px" }}>
        <BasicButtonContained type="white" size="middle" state="normal" text="White" />
      </div>
    </div>
  ),
};

export const AllStates: StoryObj<typeof BasicButtonContained> = {
  name: "所有状态",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BasicButtonContained type="primary" size="middle" state="normal" text="正常" />
      <BasicButtonContained type="primary" size="middle" state="press" text="按下" />
      <BasicButtonContained type="primary" size="middle" state="disable" text="禁用" />
    </div>
  ),
};

export const WithDifferentIcons: StoryObj<typeof BasicButtonContained> = {
  name: "不同图标",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BasicButtonContained
        type="primary"
        size="middle"
        state="normal"
        text="添加"
        icon={true}
        ic={<IconPlus />}
      />
      <BasicButtonContained
        type="auxillary"
        size="middle"
        state="normal"
        text="活动"
        icon={true}
        ic={<IconActivity />}
      />
      <BasicButtonContained
        type="primary"
        size="middle"
        state="normal"
        text="返回"
        icon={true}
        ic={<IconArrowLeft />}
      />
    </div>
  ),
};

export const SizeWithIcons: StoryObj<typeof BasicButtonContained> = {
  name: "尺寸 + 图标",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
      <BasicButtonContained
        type="primary"
        size="small"
        state="normal"
        text="小图标"
        icon={true}
        ic={<IconPlus />}
      />
      <BasicButtonContained
        type="primary"
        size="middle"
        state="normal"
        text="中图标"
        icon={true}
        ic={<IconPlus />}
      />
      <BasicButtonContained
        type="primary"
        size="large"
        state="normal"
        text="大图标"
        icon={true}
        ic={<IconPlus />}
      />
    </div>
  ),
};

export const TypeStates: StoryObj<typeof BasicButtonContained> = {
  name: "类型 + 状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span style={{ width: "80px", fontSize: "14px", fontWeight: "bold" }}>Primary:</span>
        <BasicButtonContained type="primary" size="middle" state="normal" text="正常" />
        <BasicButtonContained type="primary" size="middle" state="press" text="按下" />
        <BasicButtonContained type="primary" size="middle" state="disable" text="禁用" />
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <span style={{ width: "80px", fontSize: "14px", fontWeight: "bold" }}>Auxillary:</span>
        <BasicButtonContained type="auxillary" size="middle" state="normal" text="正常" />
        <BasicButtonContained type="auxillary" size="middle" state="press" text="按下" />
        <BasicButtonContained type="auxillary" size="middle" state="disable" text="禁用" />
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center", backgroundColor: "#f0f0f0", padding: "8px", borderRadius: "4px" }}>
        <span style={{ width: "80px", fontSize: "14px", fontWeight: "bold" }}>White:</span>
        <BasicButtonContained type="white" size="middle" state="normal" text="正常" />
        <BasicButtonContained type="white" size="middle" state="press" text="按下" />
        <BasicButtonContained type="white" size="middle" state="disable" text="禁用" />
      </div>
    </div>
  ),
};

export const Interactive: StoryObj<typeof BasicButtonContained> = {
  name: "交互式",
  args: {
    type: "primary",
    size: "middle",
    state: "normal",
    text: "点击我",
    icon: true,
    ic: <IconActivity />,
    onClick: () => alert("按钮被点击了！"),
  },
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const Playground: StoryObj<typeof BasicButtonContained> = {
  name: "调试面板",
  args: {
    type: "primary",
    size: "middle",
    state: "normal",
    text: "自定义按钮",
    icon: false,
    buttonType: "button",
  },
  render: ({ ...args }) => (
    <BasicButtonContained
      {...args}
      ic={args.icon ? <IconPlus /> : undefined}
    />
  ),
}; 