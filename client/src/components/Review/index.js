import React from "react";
import { gql, useMutation } from '@apollo/client';

export const Review = () => {
    const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor at sem sed facilisis. Vivamus congue arcu dolor, in ornare enim pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fermentum lectus eget hendrerit sodales. Aliquam bibendum tortor sem, id placerat nunc fermentum.";

    //graphql mutation
    

    return (
        <div className="box">
            <div className=" is-size-6 is-italic has-text-weight-medium">Username</div>
            <div className="is-flex ">
                <div className="rev-max-description">{lorem}</div>
            </div>
            <div>Rating ★★★★★</div>
        </div>
    )
}