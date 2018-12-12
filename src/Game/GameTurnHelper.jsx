import React from "react";
import Color from "color";

import { allColors } from "../Cards/CardColor";

import ShareCell from "./ShareCell";

export const getBankAmounts = turn =>
  turn.bankAmounts.map(
    (amount, amountIndex) =>
      amountIndex < turn.bankAmounts.length - 1 ? (
        <span
          key={amount}
          style={{
            color: "black",
            textDecoration: "line-through",
            marginRight: "1em"
          }}
        >
          {amount}
        </span>
      ) : (
        <span
          key={amount}
          style={{
            color: "black"
          }}
        >
          {amount}
        </span>
      )
  );

export const getFirstStepCells = turn => {
  const firstStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "FIRST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, index) =>
        cells.push(
          <ShareCell key={`first_${share.id}`} color={allColors[index]}>
            <span
              style={{
                color: share.amount
                  ? "black"
                  : Color(allColors[index].style)
                      .darken(0.5)
                      .alpha(0.2)
              }}
            >
              {share.amount}
            </span>
          </ShareCell>
        )
      );
    }

    return cells;
  }, []);

  return firstStepCells;
};

export const getLastStepCells = turn => {
  const repurchaseSteps = turn.steps
    .filter(step => step.stepType === "REPURCHASE_STEP")
    .sort((a, b) => a.originalStepId - b.originalStepId)
    .map(repurchaseStep => ({
      ...repurchaseStep,
      shares: repurchaseStep.shares.sort((a, b) => a.id - b.id)
    }));

  const lastStepCells = turn.steps.reduce((cells, step) => {
    if (step.stepType === "LAST_BUY_SELL_STEP") {
      step.shares.sort((a, b) => a.id - b.id).forEach((share, colorIndex) => {
        const amounts = [
          share.amount,
          ...repurchaseSteps.map(
            repurchaseStep => repurchaseStep.shares[colorIndex].amount
          )
        ].reduce((changedAmounts, amount) => {
          if (
            changedAmounts.length === 0 ||
            changedAmounts[changedAmounts.length - 1] !== amount
          ) {
            changedAmounts.push(amount);
          }

          return changedAmounts;
        }, []);

        cells.push(
          <ShareCell key={`last_${share.id}`} color={allColors[colorIndex]}>
            <div>
              {amounts.length > 1 ? (
                amounts.map(
                  (amount, amountIndex) =>
                    amountIndex < amounts.length - 1 ? (
                      <span
                        key={amount}
                        style={{
                          color: "black",
                          textDecoration: "line-through",
                          marginRight: "1em"
                        }}
                      >
                        {amount}
                      </span>
                    ) : (
                      <span
                        key={amount}
                        style={{
                          color: "black"
                        }}
                      >
                        {amount}
                      </span>
                    )
                )
              ) : (
                <span
                  key={share.amount}
                  style={{
                    color: share.amount
                      ? "black"
                      : Color(allColors[colorIndex].style)
                          .darken(0.5)
                          .alpha(0.2)
                  }}
                >
                  {share.amount}
                </span>
              )}
            </div>
          </ShareCell>
        );
      });
    }

    return cells;
  }, []);

  return lastStepCells;
};
