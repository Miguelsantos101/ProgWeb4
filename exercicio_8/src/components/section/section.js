import React from "react";
import "./section.css";

const Section = (props) => {
  if (props.topic) {
    if (props.newLine) {
      return (
        <section>
          <h2>{props.title}</h2>
          {props.topics.map(function (item, index) {
            return (
              <React.Fragment key={index}>
                <h3>{item.subTitle}</h3>
                <p>
                  {item.subItems.map(function (item, index) {
                    return (
                      <React.Fragment key={index}>
                        {item}
                        <br />
                        <br />
                      </React.Fragment>
                    );
                  })}
                </p>
              </React.Fragment>
            );
          })}
          <hr />
        </section>
      );
    } else {
      return (
        <section>
          <h2>{props.title}</h2>
          {props.topics.map(function (item, index) {
            return (
              <React.Fragment key={index}>
                <h3>{item.subTitle}</h3>
                <p>
                  {item.subItems.map(function (item, index) {
                    return (
                      <React.Fragment key={index}>
                        {item}
                        <br />
                      </React.Fragment>
                    );
                  })}
                </p>
              </React.Fragment>
            );
          })}
          <hr />
        </section>
      );
    }
  } else if (props.paragraph || props.list) {
    if (props.paragraph && props.list) {
      return (
        <section>
          <h2>{props.title}</h2>
          {props.paragraphs.map(function (item, index) {
            return (
              <React.Fragment key={index}>
                <p>{item}</p>
              </React.Fragment>
            );
          })}
          <ul type="none">
            {props.listItems.map(function (item, index) {
              return (
                <React.Fragment key={index}>
                  <li>{item}</li>
                </React.Fragment>
              );
            })}
          </ul>
          <hr />
        </section>
      );
    } else if (props.list) {
      return (
        <section>
          <h2>{props.title}</h2>
          <ul type="none">
            {props.listItems.map(function (item, index) {
              return (
                <React.Fragment key={index}>
                  <li>{item}</li>
                </React.Fragment>
              );
            })}
          </ul>
          <hr />
        </section>
      );
    } else if (props.paragraph) {
      return (
        <section>
          <h2>{props.title}</h2>
          {props.paragraphs.map(function (item, index) {
            return (
              <React.Fragment key={index}>
                <p>{item}</p>
              </React.Fragment>
            );
          })}
        </section>
      );
    }
  } else {
    return (
      <section>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <hr />
      </section>
    );
  }
};

export default Section;
