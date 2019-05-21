/**
 *
 * DragAndDrop
 *
 */

import React from 'react';
// import styled from 'styled-components';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Grid, RootRef } from '@material-ui/core';

function DragAndDrop<Data = any>({
  reorderId,
  data,
  renderItem,
  onChange,
}: DragAndDropProps<Data>) {
  return (
    <DragDropContext
      onDragEnd={result => {
        if (result.source && result.destination) {
          onChange(
            reorder(data, result.source.index, result.destination.index),
          );
        }
      }}
    >
      <Droppable droppableId={reorderId}>
        {dropProvided => {
          return (
            <RootRef rootRef={dropProvided.innerRef}>
              <Grid container spacing={24}>
                {data.map((dataPoint, index) => {
                  return (
                    <Draggable
                      // @ts-ignore
                      key={dataPoint.id}
                      // @ts-ignore
                      draggableId={dataPoint.id}
                      index={index}
                    >
                      {dragProvided =>
                        renderItem(dataPoint, {
                          ref: dragProvided.innerRef,
                          ...dragProvided.draggableProps,
                          ...dragProvided.dragHandleProps,
                          style: {
                            ...dragProvided.draggableProps.style,
                            marginBottom: '16px',
                          },
                        })
                      }
                    </Draggable>
                  );
                })}
              </Grid>
            </RootRef>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

export interface DragAndDropProps<Data = any> {
  data: Data[];
  renderItem: (item: Data, propsToSpread: any) => any;
  reorderId: string;
  onChange: (newData: Data[]) => void;
}

export default DragAndDrop;

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
