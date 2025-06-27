import React from "react";
import { BasicButtonContained } from "primitives";
import { IconPlus } from "icons";

export const BasicButtonDemo = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h2>Basic Button Contained 演示</h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <h3>Primary 按钮：</h3>
        <BasicButtonContained
          type="primary"
          size="small"
          state="normal"
          text="小按钮"
        />
        <BasicButtonContained
          type="primary"
          size="middle"
          state="normal"
          text="中按钮"
        />
        <BasicButtonContained
          type="primary"
          size="large"
          state="normal"
          text="大按钮"
        />
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <h3>Auxillary 按钮：</h3>
        <BasicButtonContained
          type="auxillary"
          size="small"
          state="normal"
          text="小按钮"
        />
        <BasicButtonContained
          type="auxillary"
          size="middle"
          state="normal"
          text="中按钮"
        />
        <BasicButtonContained
          type="auxillary"
          size="large"
          state="normal"
          text="大按钮"
        />
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <h3>White 按钮：</h3>
        <div style={{ backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "8px" }}>
          <BasicButtonContained
            type="white"
            size="small"
            state="normal"
            text="小按钮"
          />
          <BasicButtonContained
            type="white"
            size="middle"
            state="normal"
            text="中按钮"
          />
          <BasicButtonContained
            type="white"
            size="large"
            state="normal"
            text="大按钮"
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <h3>带图标的按钮：</h3>
        <BasicButtonContained
          type="primary"
          size="middle"
          state="normal"
          icon={true}
          ic={<IconPlus />}
          text="添加"
        />
        <BasicButtonContained
          type="auxillary"
          size="middle"
          state="normal"
          icon={true}
          ic={<IconPlus />}
          text="添加"
        />
      </div>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
        <h3>不同状态：</h3>
        <BasicButtonContained
          type="primary"
          size="middle"
          state="normal"
          text="正常"
        />
        <BasicButtonContained
          type="primary"
          size="middle"
          state="press"
          text="按下"
        />
        <BasicButtonContained
          type="primary"
          size="middle"
          state="disable"
          text="禁用"
        />
      </div>
    </div>
  );
}; 