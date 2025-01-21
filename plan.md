# Eye of Rah Plan

## Group Members
- Svante Ericsson ([svasim1](https://github.com/svasim1))
- Dennis Forslund ([ABB22denfor](https://github.com/ABB22denfor))

## Description
Our website contains a background image of the "Eye of Rah" with accompanying text and an input field. 
After guessing the correct password, the user is sent to another page with a LeBron James background with a heart and a click counter. 
The key will be displayed on the page after correct user input.

<div style="text-align: center;">
    <img src="./images/eye-of-rah.jpg" alt="eye-of-rah image" width="300"/>
    <img src="./images/lebonbon.png" alt="LeBron image" width="300"/>
</div>

## Solution
<details>
    <summary>SPOILERS</summary>
    <p>The user should use SQL injection to solve the first page and get the password, with a command similar to:</p>
    <pre><code>SELECT password FROM brainrot WHERE meme = 'eye-of-rah'</code></pre>
    <p>The second page is solved by reaching LeBrons career points tally clicks using web devtools as help.</p>
</details>

## Difficulty
Our estimated difficulty for Eye of Rah is a 0.3, on a scale from 0-1 where the decimal represents the percentage of people able to solve the problem.

<details>
    <summary>SPOILERS</summary>
    <p>The difficulty of 0.3 is based on the fact that SQL injection is a known technique but requires some knowledge to execute properly.</p>
</details>
