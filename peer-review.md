## P3 Peer Review

+ Reviewer's name: Fergus588
+ Reviwee's name: conbainbridge
+ URL to reviewee's Github repo: *<https://github.com/conbainbridge/e28>*


### Are you able to produce any errors or unexpected results?
On the todo page i was unable to add more than 1 to the to-do list, and if i changed page and went back to the todo page it didnt save my todo even after pressing "Save note", and if i try to add a different todo it would add the previous one added earlier. This is the same on the notes page as well. I am unsure what the save note button on both pages is used for as it doesnt save the note/todo on the page, but saves it into local storage which can then be deployed again with add note.
I was unable to go to the Vue section in the Dev inspector tool i got this message on the chrome extension:
"Vue.js is detected on this page.
Devtools inspection is not available because it's in production mode or explicitly disabled by the author."

### Were there any parts of the interface that you found confusing or unclear?
I thoought that notes and todos added would apear on the home page. I was unsure exactly what "save new item" did, an action message might've helped me understand what each button does on press.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
No was easy to follow.
### Are there any parts of the code that you found interesting or taught you something new?
No
### Are there any best practices discussed in course material that you feel were not addressed in the code?
```
<template>
  <div>
    <div class="slip-style" v-if="notes">
      <div class="slip-title">{{ notes.title }}</div>
      <hr />
      <div class="slip-notes">{{ notes.note }}</div>
    </div>
  </div>
</template>
```
I was unsure why v-if="notes" was nessesary as notes would always return true in this example.
### Do you have any additional comments not covered in the above questions?
No
