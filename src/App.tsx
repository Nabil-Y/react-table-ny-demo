import { Table } from "react-table-ny";
import { EMPLOYEES } from "./data/testData";
import "./App.css";
import "./my-custom-class.css";

function App() {
  return (
    <main>
      <section className="doc-section">
        <h1>React-Table-NY</h1>
        <h2>Docs/Demo</h2>
      </section>
      <section className="doc-section">
        <h3>1. How to use this package</h3>
        <h4>1.a. How to install</h4>
        Run <pre>npm install react-table-ny</pre>
        <h4>1.b. Use the Table component </h4>
        At the top level of your component, import the Table component:{" "}
        <pre>{`import \{ Table \} from  "react-table-ny" `}</pre>
        <br /> <br />
        Then your can use it with your own data:{" "}
        <pre>
          {`<Table data={yourData} title="Your Title" skipFirstKey className="your-classes" />`}
        </pre>
      </section>
      <section className="doc-section">
        <h3>2. Table component props</h3>
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
          table. More on how to customise each part later.
        </p>
        <h4>possibleRows</h4>
        <p>
          Optionnal. Array of numbers. Will only use the first four numbers of
          the array. If possibleRows isn't an array or if it has values that are
          not numbers, it will revert to its default value of {"[10,25,50,100]"}
          .
        </p>
      </section>
      <section className="doc-section">
        <h3>3. Examples</h3>
        <p>
          The table component will return a paragraph with an error message if
          data is not valid. <br /> <br />
          Valid data used for examples can be found{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny-docs/blob/master/src/data/testData.ts">
            here
          </a>
          .
        </p>
        <h4>3.a. When data is not an Array</h4>
        {
          //@ts-expect-error
          <Table data={1} />
        }
        <hr />
        <h4>3.b. When data is an array but does not have objects</h4>
        {
          //@ts-expect-error
          <Table data={[1, 2]} />
        }
        <hr />
        <h4>
          3.c. When data is an array of objects that don't have the same keys
        </h4>
        {<Table data={[{ firstname: "alpha" }, { lastname: "beta" }]} />}
        <hr />
        <h4>3.d. When data is a valid array </h4>
        {<Table data={EMPLOYEES} />}
        <hr />
        <h4>3.e. With skip firstKey = true </h4>
        {<Table data={EMPLOYEES} skipFirstKey />}
        <hr />
        <h4>3.f. With a title and custom possibleRows {"[1,2,3,5]"} </h4>
        {
          <Table
            data={EMPLOYEES}
            skipFirstKey
            title="Custom Title"
            possibleRows={[1, 2, 3, 5]}
          />
        }
      </section>
      <section className="doc-section">
        <h3>4. Features</h3>
        <h4>4.a Search</h4>
        <p>
          The search feature will filter your data table with entries where any
          value matches your search query.
        </p>
        <h4>4.b Sorting</h4>
        <p>
          React-Table-NY comes with a sorting by key feature. Your first click
          on any title head will sort by ascending order, another click will
          sort by ascending order etc... When clicking on a new key, it will
          sort by ascending order by default.
        </p>
        <h4>4.c. Choose rows per page</h4>
        <p>
          By default, you can select 10, 25, 50 or 100 rows per page. If you
          want other values, you can input an array of four numbers (or less) in
          the possibleRows props. If it's not an array of numbers, it will
          revert back to the default values.
        </p>
        <h4>4.d. Styling</h4>
        <p>
          The className prop allows you to add classes to the top level of the
          Table component. Then in your css/sass/less you'll be able to target
          any element inside the table. <br /> <br /> Load the table in your
          prefered browser and inspect developper tools to see the class names
          used or you can check the{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny/blob/master/src/components/Table.css">
            Table.css
          </a>{" "}
          and{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny/blob/master/src/components/Table.tsx">
            Table.tsx
          </a>
          .
          <br /> <br />
          Styles used below can be found{" "}
          <a href="https://github.com/Nabil-Y/react-table-ny-docs/blob/master/src/my-custom-class.css">
            here
          </a>
          .
        </p>

        <Table
          data={EMPLOYEES}
          skipFirstKey
          title="Custom Title"
          possibleRows={[2, 3, 4, 5]}
          className="my-custom-class"
        />
      </section>
      <section className="doc-section">
        <h3>Thank you for using React-Table-NY</h3>
        <p>
          Please don't hesitate to give me your feedback on{" "}
          <a href="https://github.com/Nabil-Y">GitHub</a> or{" "}
          <a href="https://twitter.com/nabil_io">Twitter</a>
        </p>
      </section>
    </main>
  );
}

export default App;
