# problems
To run applicaiton:
  1. On local machine cd to the directory where this repo is cloned.
  2. npm install
  
Basic terminal based application
There is no GUI, it is just a CLI based application using which we can
  1. create problems
  2. read a problem
  3. delete a problem
  4. list all the problems 
  
All data is in JSON format and it will be saved in the file <pre> ~/problems-data.json.</pre>

Example Usage:

1. <b>Create problem</b>  
  <pre>node app add -t 'unique tag for problem' -s 'problem statement' -a 'answer options' -c 'correct answer'</pre>
  
  For example, if we use  
  <pre>node app add -t 'firstProblem' -s 'What is your name?' -a "[Neeraj, Vineet, Raghav, Yuvraj, Rohtash]" -c 'Neeraj'</pre>
  
  Above command will create a problem in ~/problems-data.json in JSON format, like 
  [{"tag":"firstProblem","statement":"What is your name?","answers":"[Neeraj, Vineet, Raghav, Yuvraj, Rohtash]","correctAnswer":"Neeraj"}]  
  
  Note: Tags should be unique. No two problems can have same tag.  
  
2.  <b>Read a problem</b>   
  <pre>node app read -t 'firstProblem'</pre>  
  Here, only flag needed is -t (tag).
 
  For example, if we use
  <pre> node app read -t 'firstProblem'</pre>  
  
  This will print problem with tag 'firstProblem' in terminal
  
3.  <b>Delete a problem</b>   
  <pre>node app remove -t 'firstProblem'</pre>  
  
  This will delete the problem with specified tag.
  
4.  <b>List all problems</b>   
  <pre>node app list</pre>  
  
  This will list all saved problems.  
  
  Note: There is no flag required for this command.
  
  

