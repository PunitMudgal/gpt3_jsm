import React from "react";
import "./whatGPT3.css";
import Feature from "../../components/feature/Feature";

export default function WhatGPT3() {
  return (
    <div className="whatgpt3 section_margin" id="whatGPT3">
      <div className="whatgpt3-feature-1">
        <Feature title="What is GPT-3" description="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className="whatgpt3-heading">
        <h1 className="gradient_text">The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="whatgpt3-container-3">
        <Feature
          title="Chatbots"
          description="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          description="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}
