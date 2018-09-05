# Adressbook

Adressbook made with HTML, SASS & JavaScript as assigned by Competa.

## Retrieving files

Clone the project to your local machine by using the command:

```
$ git clone https://github.com/VinceVleer/Adressbook
```

### Activity

Setting up the project folder structure and Gruntfile was an effortless task.
I set up an HTML file with BEM convention & SASS styling to serve as a base.
Next I retrieved information from the API by doing an AJAX call with Javascript.
The retrieved information then goes trough a loop that pastes the full name, phone number & image into a (pre styled) HMTL element that will then be appended to the DOM.
At last, I applied module pattern to the function in order to achieve asynchronous loading of the contacts.

### Struggles

Getting the API to work correctly was a bit tricky and took some time to research.
The other work was a piece of cake.
