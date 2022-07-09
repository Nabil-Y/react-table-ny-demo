import { Table } from "react-table-ny";
import { EMPLOYEES } from "./data/testData";
import "./App.css";
import "./my-custom-class.css";

function App() {
  return (
    <main>
      <section>
        <h1>React-Table-NY</h1>
        <h2>Docs and demo</h2>
      </section>
      <section>
        <h3>How to use this package</h3>
        <h4>How to install</h4>
        <p>
          Run <pre>npm install react-table-ny</pre>
        </p>
        <h4> Use the Table component </h4>
        <p>
          At the top level of your component, import the Table component
          <pre>{`import \{ Table \} from  "react-table-ny" `}</pre>
          Then your can use it with your own data
          <pre>
            {`<Table data={yourData} title="Your Title" skipFirstKey className="your-classes" />`}
          </pre>
        </p>
      </section>
      <section>
        <h3>Table component props</h3>
        <h4>data</h4>
        <p>
          Mandatory. Array of objects with keys and values of type string.
          Objects must have the same keys.
        </p>
        <h4>title</h4>
        <p>
          Optionnal. String. Adds a h2 with yout title at the top of the table
          when used.
        </p>
        <h4>skipFirstKey</h4>
        <p>
          Optionnal. Boolean. Will bypass the first key of your objects if true.
          Useful when you have objects with an Id you want to hide.
        </p>
        <h4>className</h4>
        <p>
          Optionnal. String. Add classes that will be applied to the whole
          table. More on how to customise each part later
        </p>
        <h4>possibleRows</h4>
        <p>
          Optionnal. Array of numbers. Will only use the first four numbers of
          the array. If possibleRows isn't an array or if it has values that are
          not numbers, it will revert to its default value of {"[10,25,50,100]"}
        </p>
      </section>
      <section>
        <h3>Examples</h3>
        <h4>When data is not an Array</h4>
        {
          //@ts-expect-error
          <Table data={1} />
        }
        <h4>When data is an array but does not have objects</h4>
        {
          //@ts-expect-error
          <Table data={[1, 2]} />
        }
        <h4>When data is an array of objects that don't have the same keys</h4>
        {<Table data={[{ firstname: "alpha" }, { lastname: "beta" }]} />}
        <h4>When data is a valid array </h4>
        {<Table data={EMPLOYEES} />}
        <h4>With skip firstKey = true </h4>
        {<Table data={EMPLOYEES} skipFirstKey />}
        <h4> With a title and custom possibleRows {"[1,2,3,5]"} </h4>
        {
          <Table
            data={EMPLOYEES}
            skipFirstKey
            title="Custom Title"
            possibleRows={[1, 2, 3, 5]}
          />
        }
      </section>
      <section>
        <h3>Features</h3>
        <h4>Search</h4>
        <p>
          The search feature will filter your data table with entries where any
          value matches your search query
        </p>
        <h4>Sorting</h4>
        <p>
          React-Table-NY comes with a sorting by key feature. Your first click
          on any title head will sort by ascending order, another click will
          sort by ascending order etc... When clicking on a new key, it will
          sort by ascending order by default
        </p>
        <h4>Styling</h4>
        <p>
          The className prop allows you to add classes to the top level of the
          Table component. Then in your css/sass/less you'll be able to target
          any element inside the table.
        </p>
        <p>
          Please load the table and inspect developper tools to see the
          className used. Or you can check the{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny/blob/master/src/components/Table.css">
            Table.css
          </a>{" "}
          or{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny/blob/master/src/components/Table.tsx">
            Table.tsx
          </a>
        </p>
        <Table
          data={EMPLOYEES}
          skipFirstKey
          title="Custom Title"
          possibleRows={[2, 3, 4, 5]}
          className="my-custom-class"
        />
      </section>
    </main>
  );
}

export default App;
