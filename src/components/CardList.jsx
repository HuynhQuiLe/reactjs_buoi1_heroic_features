import React from "react";
import Card from "./Card";

const CardList = () => {
  const cardList = [
    {
      icon: "bi bi-collection",
      title: "Fresh new layout",
      sub_title:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      icon: "bi bi-cloud-download",
      title: "Free to download",
      sub_title:
        "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      icon: "bi bi-card-heading",
      title: "Jumbotron hero header",
      sub_title:
        "The heroic part of this template is the jumbotron hero header!",
    },
    {
      icon: "bi bi-bootstrap",
      title: "Feature boxes",
      sub_title:
        "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      icon: "bi bi-code",
      title: "Simple clean code",
      sub_title:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      icon: "bi bi-patch-check",
      title: "A name you trust",
      sub_title:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          {cardList.map((item, index) => {
            return <Card item={item} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardList;
