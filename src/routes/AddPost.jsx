import { Form, redirect } from "react-router-dom";

function AddPost() {
  return (
    <>
      <h1>AddPost</h1>
      <Form method="POST">
        <input type="text" name="title" />
        <input type="text" name="body" />
        <input type="number" name="userId" />
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export default AddPost;

export async function action(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  console.log(postData);
  try {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "post",
      body: JSON.stringify(postData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    return redirect("/posts");
  } catch (e) {
    console.log(e, "e");
  }
}
