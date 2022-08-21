import React from 'react'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
export default function Cardfour() {
  return (
    <>
    <hr/>
        
        <div class="container" style={{ marginTop: "90px",backgroundImage:' linear-gradient(to right,#de6262 , #ffb88c)'}} id="events">
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120 }}
            
          >
              <h1 style={{fontSize:'60px'}}><Typewriter
              options={{
                strings: ["Events"],
                autoStart: true,
                loop: true,
              }}
            /></h1>
          </motion.div>
          <hr/>
      <div class="row row-cols-1 row-cols-md-3 g-4" >
      <div class="col" style={{padding:'20px'}}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.125 }}
          >
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              style={{width:'70%'}}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                <a href='https://www.google.com/'>abc@gmail.com</a>
                  <p>
                    super helpul and talented
                  </p>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div class="col" style={{padding:'20px'}}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.125 }}
          >
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              style={{width:'70%'}}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  <a href='https://www.google.com/'>abc@gmail.com</a>
                  <p>
                    super helpul and talented
                  </p>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div class="col" style={{padding:'20px'}}>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 120 }}
            whileHover={{ scale: 1.125 }}
          >
            <div class="card h-100">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQb4jJzXX5S9IgIQW_hUtTfl4e_CFiu9toQ&usqp=CAU"
                class="card-img-top"
                alt="..."
              style={{width:'70%'}}/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  <a href='https://www.google.com/'>abc@gmail.com</a>
                  <p>
                    super helpul and talented
                  </p>
                </p>
              </div>
            </div>
          </motion.div>
        </div>


        
        
        
        
        
        
       
        
        </div>
    </div>
    </>
  )
}
