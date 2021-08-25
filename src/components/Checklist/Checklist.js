import React from "react";

export default function Checklist({ info }) {
  return (
    <Form>
      {info.map((s) => (
        <div className="mb-3">
          <Form.Check title={s.title} />
        </div>
      ))}
    </Form>
  );
}
