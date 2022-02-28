import { describe, it, expect } from 'vitest'
import { addTodo, removeTodo } from './App';


describe('addTodo', () => {
    it('return updated todos with the new one', () => {
       const result = addTodo([
        { userId: 1, id: 1, title: 'Learn JS',completed: true },
        { userId: 1, id: 2, title: 'Play Football', completed: false},
        { userId: 1, id: 3, title: 'Go skiing', completed: true },
     ],
     {userId: 1, id: 204, title: 'Learn TDD', completed: false});
       expect(result).toMatchObject([
        {userId: 1,id: 204, title: 'Learn TDD', completed: false},
        { userId: 1, id: 1, title: 'Learn JS',completed: true },
        { userId: 1, id: 2, title: 'Play Football', completed: false},
        { userId: 1, id: 3, title: 'Go skiing', completed: true }
       ]);
    });
 });
 
 describe('removeTodo', () => {
    it('returns an empty array if input array is emtpy', () => {
       const result = removeTodo([], 1);
       expect(result).toMatchObject([]);
    });
    it('returns an empty array if input array is emtpy', () => {
       const result = removeTodo([], 30);
       expect(result).toMatchObject([]);
    });
    it('returns an array without a specified todo', () => {
       const result = removeTodo(
          [
            { userId: 1, id: 1, title: 'Learn JS',completed: true },
        { userId: 1, id: 2, title: 'Play Football', completed: false},
        { userId: 1, id: 3, title: 'Go skiing', completed: true },
          ],
          3
       );
       expect(result).toMatchObject([
        { userId: 1, id: 1, title: 'Learn JS',completed: true },
        { userId: 1, id: 2, title: 'Play Football', completed: false}
       ]);
    });
});