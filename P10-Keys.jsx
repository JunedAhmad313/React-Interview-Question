/*
Q. What is Keys in React ?
Ans. Keys in React is Unique Identifier . In React it is used to identify
     which item have change update or deleted from the list. */

     function MyListComponent({ items }) {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        );
      }
      