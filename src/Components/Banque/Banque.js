//import React, { Component } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//export default class Banque extends Component {
//   state = { solde: 100, montant: 0, virement: 0, recharge: 0 };

//   render() {
//     return (
//       <div>
//         <h1>Bienvenue dans l'espace client de votre banque</h1>

//         <div>
//           <p>Votre solde est de : {this.state.solde} </p>
//           <p>
//             Rechargez votre compte{" "}
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 this.setState({
//                   solde: this.state.montant + this.state.solde,
//                   montant: 0,
//                 });
//               }}
//             >
//               <input
//                 value={this.state.montant}
//                 placeholder="Montant"
//                 onChange={(e) => {
//                   if (!Number.isNaN(parseFloat(e.target.value))) {
//                     this.setState({ montant: parseFloat(e.target.value) });
//                   } else {
//                     this.setState({ montant: 0 });
//                   }
//                 }}
//               />
//               <button
//                 onClick={() => {
//                   this.setState({
//                     solde: this.state.montant + this.state.solde,
//                     montant: 0,
//                   });
//                   toast("Montant ajouté avec succès");
//                 }}
//               >
//                 Recharger
//               </button>
//             </form>
//           </p>

//           <p>
//             Virement
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 this.setState({
//                   solde: this.state.solde - this.state.virement,
//                   virement: 0,
//                 });
//               }}
//             >
//               <input
//                 value={this.state.virement}
//                 placeholder="Montant"
//                 onChange={(e) => {
//                   if (!Number.isNaN(parseFloat(e.target.value))) {
//                     this.setState({ virement: parseFloat(e.target.value) });
//                   } else {
//                     this.setState({ virement: 0 });
//                   }
//                 }}
//               />
//               <button
//                 onClick={() => {
//                   this.setState({
//                     solde: this.state.solde - this.state.virement,
//                     virement: 0,
//                   });
//                   toast("Virement effectué avec succès");
//                 }}
//               >
//                 Recharger
//               </button>
//             </form>
//           </p>
//           <p>
//             Recharger téléphone
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 this.setState({
//                   solde: this.state.solde - this.state.recharge,
//                   recharge: 0,
//                 });
//               }}
//             >
//               <input
//                 value={this.state.recharge}
//                 placeholder="Montant"
//                 onChange={(e) => {
//                   if (!Number.isNaN(parseFloat(e.target.value))) {
//                     this.setState({ recharge: parseFloat(e.target.value) });
//                   } else {
//                     this.setState({ recharge: 0 });
//                   }
//                 }}
//               />
//               <button
//                 onClick={() => {
//                   this.setState({
//                     solde: this.state.solde - this.state.recharge,
//                     recharge: 0,
//                   });
//                   toast("Recharge effectuée avec succès");
//                 }}
//               >
//                 Recharger
//               </button>
//             </form>
//           </p>
//         </div>
//         <ToastContainer position="top-right" />
//       </div>
//     );
//   }
// }

export const Banque = () => {
  const [solde, setSolde] = useState(0);
  const [montant, setMontant] = useState(0);
  const [virement, setVirement] = useState(0);
  const [recharge, setRecharge] = useState(0);
  return (
    <div>
      <div>
        <h1>Bienvenue dans l'espace client de votre banque</h1>
        <p>Votre solde est de : {solde} </p>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSolde(solde + montant);
            setMontant(0);
            if (montant > 0) {
              toast("Montant ajouté avec succès");
            }
          }}
        >
          <input
            value={montant}
            onChange={(e) => {
              if (!Number.isNaN(parseFloat(e.target.value))) {
                setMontant(parseFloat(e.target.value));
              } else {
                setMontant(0);
              }
            }}
          />
          <button>Recharger</button>
        </form>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (solde < virement) {
              setVirement(0);
              toast("Virement impossible");
            } else {
              setSolde(solde - virement);
              setVirement(0);
              if (virement > 0) {
                toast("Virement effectué avec succès");
              }
            }
          }}
        >
          <input
            value={virement}
            onChange={(e) => {
              if (!Number.isNaN(parseFloat(e.target.value))) {
                setVirement(parseFloat(e.target.value));
              } else {
                setVirement(0);
              }
            }}
          />
          <button>Recharger</button>
        </form>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (solde < recharge) {
              setRecharge(0);
              toast("Racherge impossible");
            } else {
              setSolde(solde - recharge);
              setRecharge(0);
              if (recharge > 0) {
                toast("Recharge effectuée avec succès");
              }
            }
          }}
        >
          <input
            value={recharge}
            onChange={(e) => {
              if (!Number.isNaN(parseFloat(e.target.value))) {
                setRecharge(parseFloat(e.target.value));
              } else {
                setRecharge(0);
              }
            }}
          />
          <button>Recharger</button>
        </form>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};
