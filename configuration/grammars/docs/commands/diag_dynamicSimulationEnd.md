Ends dynamic simulation data gathering and writes collected data into given file. The file is saved in the Arma 3 installation folder.
<code>// Example output.
Enabled time (in % of collection time)       Subject name
  1.$                                          O Bravo 1-5
  1.$                                          O Bravo 1-6
  1.$                                          extraction_bike (B_Quadbike_01_F) - [3151,9662,59]
  .....                                          ..................................
  -1.$                                         O Bravo 1-4
  -1.$                                         target_1 (O_SAM_System_04_F) - [3571,9878,70]
  -1.$                                         O Alpha 3-4
Collection took 0.0s</code>


---
*Example 1:*
```sqf
diag_dynamicSimulationEnd "dynSimDebugData"; // Creates a file called "dynSimDebugData_runtimelog.txt"
```