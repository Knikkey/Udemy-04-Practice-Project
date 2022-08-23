import styles from "./Output.module.css";

import Form from "./Form";

const Output = (props) => {
  const saveDataHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };
    console.log(data);
  };

  return (
    <div>
      <Form onSaveData={saveDataHandler} />
      <ul className={styles.list}>
        <li className={styles.li}>Dummy data</li>
        for (entry of data){" "}
        {
          <li className={styles.li}>
            `${props.data.username}, ${props.data.age}`
          </li>
        }
      </ul>
    </div>
  );
};

export default Output;
