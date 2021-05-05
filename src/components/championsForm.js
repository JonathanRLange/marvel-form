import React, { Component } from "react"
import axios from "axios"

class ChampionsForm extends Component {
  state = {
    loaded: false,
    loadMessage: "",
    disableButton: false,
    allowDelete: false,
    createCampaignName: "",
    loginCampaignName: "",
    campaignName: "",
    playerOneHero: "",
    playerOneTechUpgrade: "",
    playerOneBasicUpgrade: "",
    playerOneImproved: false,
    playerOneRescuedAllies: "",
    playerOneRemainingHitPoints: "",
    playerOneZolasAlgorithm: false,
    playerOneMedicalEmergency: false,
    playerOneMartialLaw: false,
    playerOneAntiHeroPropaganda: false,
    playerTwoHero: "",
    playerTwoTechUpgrade: "",
    playerTwoBasicUpgrade: "",
    playerTwoImproved: false,
    playerTwoRescuedAllies: "",
    playerTwoRemainingHitPoints: "",
    playerTwoZolasAlgorithm: false,
    playerTwoMedicalEmergency: false,
    playerTwoMartialLaw: false,
    playerTwoAntiHeroPropaganda: false,
    playerThreeHero: "",
    playerThreeTechUpgrade: "",
    playerThreeBasicUpgrade: "",
    playerThreeImproved: false,
    playerThreeRescuedAllies: "",
    playerThreeRemainingHitPoints: "",
    playerThreeZolasAlgorithm: false,
    playerThreeMedicalEmergency: false,
    playerThreeMartialLaw: false,
    playerThreeAntiHeroPropaganda: false,
    playerFourHero: "",
    playerFourTechUpgrade: "",
    playerFourBasicUpgrade: "",
    playerFourImproved: false,
    playerFourRescuedAllies: "",
    playerFourRemainingHitPoints: "",
    playerFourZolasAlgorithm: false,
    playerFourMedicalEmergency: false,
    playerFourMartialLaw: false,
    playerFourAntiHeroPropaganda: false,
    laserRifle: false,
    energyShield: false,
    powerGauntlets: false,
    exoSuit: false,
    playerOneEngaged: false,
    playerTwoEngaged: false,
    playerThreeEngaged: false,
    playerFourEngaged: false,
    numOfDelayCounters: "",
    playerOneAllyRemoved: "",
    playerTwoAllyRemoved: "",
    playerThreeAllyRemoved: "",
    playerFourAllyRemoved: "",
  }
  onChange = e => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
    //console.log(this.state.campaignName)
  }

  handleCreateSubmit = event => {
    event.preventDefault()
    this.setState({
      loadMessage: "Loading please allow up to 15 seconds...",
      disableButton: true,
    })
    //https://jons-form-api.herokuapp.com
    axios
      .post("https://jons-form-api.herokuapp.com/rors", {
        campaignName: this.state.createCampaignName,
      })
      .then(res => {
        if ("message" in res.data && res.data.message.code === 11000) {
          alert("Campaign name already taken please choose another")
          this.setState({
            loadMessage: "",
            disableButton: false,
          })
        } else {
          this.setState({
            loaded: true,
            campaignName: this.state.createCampaignName,
            loadMessage: "",
            disableButton: false,
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleLoginSubmit = event => {
    event.preventDefault()

    axios
      .post("https://jons-form-api.herokuapp.com/rorslogin", {
        campaignName: this.state.loginCampaignName,
      })
      .then(res => {
        //console.log(res.data.playerOne.rescuedAllies)
        if (res.data.message === "Wrong username") {
          alert("Campaign name not found please check spelling/capitilization")
        } else {
          this.setState({
            loaded: true,
            campaignName: this.state.loginCampaignName,
            playerOneHero: res.data.playerOne.hero,
            playerOneTechUpgrade: res.data.playerOne.techUpgrade,
            playerOneBasicUpgrade: res.data.playerOne.basicUpgrade,
            playerOneImproved: res.data.playerOne.improved,
            playerOneRescuedAllies: res.data.playerOne.rescuedAllies,
            playerOneRemainingHitPoints: res.data.playerOne.hitPoints,
            playerOneZolasAlgorithm: res.data.playerOne.obligationOne,
            playerOneMedicalEmergency: res.data.playerOne.obligationTwo,
            playerOneMartialLaw: res.data.playerOne.obligationThree,
            playerOneAntiHeroPropaganda: res.data.playerOne.obligationFour,
            playerTwoHero: res.data.playerTwo.hero,
            playerTwoTechUpgrade: res.data.playerTwo.techUpgrade,
            playerTwoBasicUpgrade: res.data.playerTwo.basicUpgrade,
            playerTwoImproved: res.data.playerTwo.improved,
            playerTwoRescuedAllies: res.data.playerTwo.rescuedAllies,
            playerTwoRemainingHitPoints: res.data.playerTwo.hitPoints,
            playerTwoZolasAlgorithm: res.data.playerTwo.obligationOne,
            playerTwoMedicalEmergency: res.data.playerTwo.obligationThree,
            playerTwoMartialLaw: res.data.playerTwo.obligationFour,
            playerTwoAntiHeroPropaganda: res.data.player,
            playerThreeHero: res.data.playerThree.hero,
            playerThreeTechUpgrade: res.data.playerThree.techUpgrade,
            playerThreeBasicUpgrade: res.data.playerThree.basicUpgrade,
            playerThreeImproved: res.data.playerThree.improved,
            playerThreeRescuedAllies: res.data.playerThree.rescuedAllies,
            playerThreeRemainingHitPoints: res.data.playerThree.hitPoints,
            playerThreeZolasAlgorithm: res.data.playerThree.obligationOne,
            playerThreeMedicalEmergency: res.data.playerThree.obligationTwo,
            playerThreeMartialLaw: res.data.playerThree.obligationThree,
            playerThreeAntiHeroPropaganda: res.data.playerThree.obligationFour,
            playerFourHero: res.data.playerFour.hero,
            playerFourTechUpgrade: res.data.playerFour.techUpgrade,
            playerFourBasicUpgrade: res.data.playerFour.basicUpgrade,
            playerFourImproved: res.data.playerFour.improved,
            playerFourRescuedAllies: res.data.playerFour.rescuedAllies,
            playerFourRemainingHitPoints: res.data.playerFour.hitPoints,
            playerFourZolasAlgorithm: res.data.playerFour.obligationOne,
            playerFourMedicalEmergency: res.data.playerFour.obligationTwo,
            playerFourMartialLaw: res.data.playerFour.obligationThree,
            playerFourAntiHeroPropaganda: res.data.playerFour.obligationFour,
            laserRifle: res.data.laserRifle,
            energyShield: res.data.energyShield,
            powerGauntlets: res.data.powerGauntlets,
            exoSuit: res.data.exoSuit,
            playerOneEngaged: res.data.playerOneEngaged,
            playerTwoEngaged: res.data.playerTwoEngaged,
            playerThreeEngaged: res.data.playerThreeEngaged,
            playerFourEngaged: res.data.playerFourEngaged,
            numOfDelayCounters: res.data.numOfDelayCounters,
            playerOneAllyRemoved: res.data.playerOneAllyRemoved,
            playerTwoAllyRemoved: res.data.playerTwoAllyRemoved,
            playerThreeAllyRemoved: res.data.playerThreeAllyRemoved,
            playerFourAllyRemoved: res.data.playerFourAllyRemoved,
          })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleSaveSubmit = event => {
    event.preventDefault()

    axios
      .post("https://jons-form-api.herokuapp.com/rorsupdate", {
        campaignName: this.state.campaignName,
        playerOne: {
          hero: this.state.playerOneHero,
          techUpgrade: this.state.playerOneTechUpgrade,
          basicUpgrade: this.state.playerOneBasicUpgrade,
          improved: this.state.playerOneImproved,
          rescuedAllies: this.state.playerOneRescuedAllies,
          hitPoints: this.state.playerOneRemainingHitPoints,
          obligationOne: this.state.playerOneZolasAlgorithm,
          obligationTwo: this.state.playerOneMedicalEmergency,
          obligationThree: this.state.playerOneMartialLaw,
          obligationFour: this.state.playerOneAntiHeroPropaganda,
        },
        playerTwo: {
          hero: this.state.playerTwoHero,
          techUpgrade: this.state.playerTwoTechUpgrade,
          basicUpgrade: this.state.playerTwoBasicUpgrade,
          improved: this.state.playerTwoImproved,
          rescuedAllies: this.state.playerTwoRescuedAllies,
          hitPoints: this.state.playerTwoRemainingHitPoints,
          obligationOne: this.state.playerTwoZolasAlgorithm,
          obligationTwo: this.state.playerTwoMedicalEmergency,
          obligationThree: this.state.playerTwoMartialLaw,
          obligationFour: this.state.playerTwoAntiHeroPropaganda,
        },
        playerThree: {
          hero: this.state.playerThreeHero,
          techUpgrade: this.state.playerThreeTechUpgrade,
          basicUpgrade: this.state.playerThreeBasicUpgrade,
          improved: this.state.playerThreeImproved,
          rescuedAllies: this.state.playerThreeRescuedAllies,
          hitPoints: this.state.playerThreeRemainingHitPoints,
          obligationOne: this.state.playerThreeZolasAlgorithm,
          obligationTwo: this.state.playerThreeMedicalEmergency,
          obligationThree: this.state.playerThreeMartialLaw,
          obligationFour: this.state.playerThreeAntiHeroPropaganda,
        },
        playerFour: {
          hero: this.state.playerFourHero,
          techUpgrade: this.state.playerFourTechUpgrade,
          basicUpgrade: this.state.playerFourBasicUpgrade,
          improved: this.state.playerFourImproved,
          rescuedAllies: this.state.playerFourRescuedAllies,
          hitPoints: this.state.playerFourRemainingHitPoints,
          obligationOne: this.state.playerFourZolasAlgorithm,
          obligationTwo: this.state.playerFourMedicalEmergency,
          obligationThree: this.state.playerFourMartialLaw,
          obligationFour: this.state.playerFourAntiHeroPropaganda,
        },
        laserRifle: this.state.laserRifle,
        energyShield: this.state.energyShield,
        powerGauntlets: this.state.powerGauntlets,
        exoSuit: this.state.exoSuit,
        numOfDelayCounters: this.state.numOfDelayCounters,
        playerOneEngaged: this.state.playerOneEngaged,
        playerTwoEngaged: this.state.playerTwoEngaged,
        playerThreeEngaged: this.state.playerThreeEngaged,
        playerFourEngaged: this.state.playerFourEngaged,
        playerOneAllyRemoved: this.state.playerOneAllyRemoved,
        playerTwoAllyRemoved: this.state.playerTwoAllyRemoved,
        playerThreeAllyRemoved: this.state.playerThreeAllyRemoved,
        playerFourAllyRemoved: this.state.playerFourAllyRemoved,
      })
      .then(res => {})
      .catch(function (error) {
        console.log(error)
      })
  }

  handleDeleteSubmit = event => {
    event.preventDefault()

    axios
      .post("https://jons-form-api.herokuapp.com/rorsdelete", {
        campaignName: this.state.campaignName,
      })
      .then(res => {
        this.setState({
          loaded: false,
          createCampaignName: "",
          loginCampaignName: "",
          campaignName: "",
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  handleLogoutSubmit = event => {
    event.preventDefault()

    this.setState({
      loaded: false,
      createCampaignName: "",
      loginCampaignName: "",
      campaignName: "",
    })
  }

  render() {
    if (!this.state.loaded) {
      return (
        <React.Fragment>
          <form onSubmit={this.handleCreateSubmit}>
            <label>Create Campaign Name: </label>
            <input
              type="text"
              name="createCampaignName"
              value={this.state.createCampaignName}
              onChange={this.onChange}
            ></input>
            <button type="submit" disabled={this.state.disableButton}>
              Create Campaign
            </button>
            <br />
            <br />
            <br />
          </form>
          <form onSubmit={this.handleLoginSubmit}>
            <label>Login Campaign Name: </label>
            <input
              type="text"
              name="loginCampaignName"
              value={this.state.loginCampaignName}
              onChange={this.onChange}
            ></input>
            <button type="submit" disabled={this.state.disableButton}>
              Login
            </button>
            <br />
            <br />
            <br />
          </form>
          <h1>{this.state.loadMessage}</h1>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <form onSubmit={this.handleSaveSubmit}>
            <div>
              <h1>Player #1</h1>
              <label>Hero: </label>
              <input
                type="text"
                name="playerOneHero"
                value={this.state.playerOneHero}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Tech Upgrade: </label>
              <select
                name="playerOneTechUpgrade"
                value={this.state.playerOneTechUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Adrenal Stims">Adrenal Stims</option>
                <option value="Tactical Scanner">Tactical Scanner</option>
                <option value="Emergency Teleporter">
                  Emergency Teleporter
                </option>
                <option value="Laser Cannon">Laser Cannon</option>
              </select>
              <br />
              <label>Basic Upgrade: </label>
              <select
                name="playerOneBasicUpgrade"
                value={this.state.playerOneBasicUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Thwart Upgrade">Thwart Upgrade</option>
                <option value="Attack Upgrade">Attack Upgrade</option>
                <option value="Defense Upgrade">Defense Upgrade</option>
                <option value="Recovery Upgrade">Recovery Upgrade</option>
              </select>
              <label> Improved? </label>
              <input
                type="checkbox"
                name="playerOneImproved"
                checked={this.state.playerOneImproved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Rescued Allies: </label>
              <input
                type="text"
                name="playerOneRescuedAllies"
                value={this.state.playerOneRescuedAllies}
                onChange={this.onChange}
              ></input>
              <br />
              <h1>Expert Only: </h1>
              <label>Remaining Hit points: </label>
              <input
                type="text"
                name="playerOneRemainingHitPoints"
                value={this.state.playerOneRemainingHitPoints}
                onChange={this.onChange}
              ></input>
              <br />
              <h2>Obligations:</h2>
              <label> Zola's Algorithm </label>
              <input
                type="checkbox"
                name="playerOneZolasAlgorithm"
                checked={this.state.playerOneZolasAlgorithm}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Medical Emergency </label>
              <input
                type="checkbox"
                name="playerOneMedicalEmergency"
                checked={this.state.playerOneMedicalEmergency}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Martial Law </label>
              <input
                type="checkbox"
                name="playerOneMartialLaw"
                checked={this.state.playerOneMartialLaw}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Anti-Hero Propaganda </label>
              <input
                type="checkbox"
                name="playerOneAntiHeroPropaganda"
                checked={this.state.playerOneAntiHeroPropaganda}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <h1>Player #2</h1>
              <label>Hero: </label>
              <input
                type="text"
                name="playerTwoHero"
                value={this.state.playerTwoHero}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Tech Upgrade: </label>
              <select
                name="playerTwoTechUpgrade"
                value={this.state.playerTwoTechUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Adrenal Stims">Adrenal Stims</option>
                <option value="Tactical Scanner">Tactical Scanner</option>
                <option value="Emergency Teleporter">
                  Emergency Teleporter
                </option>
                <option value="Laser Cannon">Laser Cannon</option>
              </select>
              <br />
              <label>Basic Upgrade: </label>
              <select
                name="playerTwoBasicUpgrade"
                value={this.state.playerTwoBasicUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Thwart Upgrade">Thwart Upgrade</option>
                <option value="Attack Upgrade">Attack Upgrade</option>
                <option value="Defense Upgrade">Defense Upgrade</option>
                <option value="Recovery Upgrade">Recovery Upgrade</option>
              </select>
              <label> Improved? </label>
              <input
                type="checkbox"
                name="playerTwoImproved"
                checked={this.state.playerTwoImproved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Rescued Allies: </label>
              <input
                type="text"
                name="playerTwoRescuedAllies"
                value={this.state.playerTwoRescuedAllies}
                onChange={this.onChange}
              ></input>
              <br />
              <h1>Expert Only: </h1>
              <label>Remaining Hit points: </label>
              <input
                type="text"
                name="playerTwoRemainingHitPoints"
                value={this.state.playerTwoRemainingHitPoints}
                onChange={this.onChange}
              ></input>
              <br />
              <h2>Obligations:</h2>
              <label> Zola's Algorithm </label>
              <input
                type="checkbox"
                name="playerTwoZolasAlgorithm"
                checked={this.state.playerTwoZolasAlgorithm}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Medical Emergency </label>
              <input
                type="checkbox"
                name="playerTwoMedicalEmergency"
                checked={this.state.playerTwoMedicalEmergency}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Martial Law </label>
              <input
                type="checkbox"
                name="playerTwoMartialLaw"
                checked={this.state.playerTwoMartialLaw}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Anti-Hero Propaganda </label>
              <input
                type="checkbox"
                name="playerTwoAntiHeroPropaganda"
                checked={this.state.playerTwoAntiHeroPropaganda}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <h1>Player #3</h1>
              <label>Hero: </label>
              <input
                type="text"
                name="playerThreeHero"
                value={this.state.playerThreeHero}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Tech Upgrade: </label>
              <select
                name="playerThreeTechUpgrade"
                value={this.state.playerThreeTechUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Adrenal Stims">Adrenal Stims</option>
                <option value="Tactical Scanner">Tactical Scanner</option>
                <option value="Emergency Teleporter">
                  Emergency Teleporter
                </option>
                <option value="Laser Cannon">Laser Cannon</option>
              </select>
              <br />
              <label>Basic Upgrade: </label>
              <select
                name="playerThreeBasicUpgrade"
                value={this.state.playerThreeBasicUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Thwart Upgrade">Thwart Upgrade</option>
                <option value="Attack Upgrade">Attack Upgrade</option>
                <option value="Defense Upgrade">Defense Upgrade</option>
                <option value="Recovery Upgrade">Recovery Upgrade</option>
              </select>
              <label> Improved? </label>
              <input
                type="checkbox"
                name="playerThreeImproved"
                checked={this.state.playerThreeImproved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Rescued Allies: </label>
              <input
                type="text"
                name="playerThreeRescuedAllies"
                value={this.state.playerThreeRescuedAllies}
                onChange={this.onChange}
              ></input>
              <br />
              <h1>Expert Only: </h1>
              <label>Remaining Hit points: </label>
              <input
                type="text"
                name="playerThreeRemainingHitPoints"
                value={this.state.playerThreeRemainingHitPoints}
                onChange={this.onChange}
              ></input>
              <br />
              <h2>Obligations:</h2>
              <label> Zola's Algorithm </label>
              <input
                type="checkbox"
                name="playerThreeZolasAlgorithm"
                checked={this.state.playerThreeZolasAlgorithm}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Medical Emergency </label>
              <input
                type="checkbox"
                name="playerThreeMedicalEmergency"
                checked={this.state.playerThreeMedicalEmergency}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Martial Law </label>
              <input
                type="checkbox"
                name="playerThreeMartialLaw"
                checked={this.state.playerThreeMartialLaw}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Anti-Hero Propaganda </label>
              <input
                type="checkbox"
                name="playerThreeAntiHeroPropaganda"
                checked={this.state.playerThreeAntiHeroPropaganda}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <h1>Player #4</h1>
              <label>Hero: </label>
              <input
                type="text"
                name="playerFourHero"
                value={this.state.playerFourHero}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Tech Upgrade: </label>
              <select
                name="playerFourTechUpgrade"
                value={this.state.playerFourTechUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Adrenal Stims">Adrenal Stims</option>
                <option value="Tactical Scanner">Tactical Scanner</option>
                <option value="Emergency Teleporter">
                  Emergency Teleporter
                </option>
                <option value="Laser Cannon">Laser Cannon</option>
              </select>
              <br />
              <label>Basic Upgrade: </label>
              <select
                name="playerFourBasicUpgrade"
                value={this.state.playerFourBasicUpgrade}
                onChange={this.onChange}
              >
                <option value=""></option>
                <option value="Thwart Upgrade">Thwart Upgrade</option>
                <option value="Attack Upgrade">Attack Upgrade</option>
                <option value="Defense Upgrade">Defense Upgrade</option>
                <option value="Recovery Upgrade">Recovery Upgrade</option>
              </select>
              <label> Improved? </label>
              <input
                type="checkbox"
                name="playerFourImproved"
                checked={this.state.playerFourImproved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Rescued Allies: </label>
              <input
                type="text"
                name="playerFourRescuedAllies"
                value={this.state.playerFourRescuedAllies}
                onChange={this.onChange}
              ></input>
              <br />
              <h1>Expert Only: </h1>
              <label>Remaining Hit points: </label>
              <input
                type="text"
                name="playerFourRemainingHitPoints"
                value={this.state.playerFourRemainingHitPoints}
                onChange={this.onChange}
              ></input>
              <br />
              <h2>Obligations:</h2>
              <label> Zola's Algorithm </label>
              <input
                type="checkbox"
                name="playerFourZolasAlgorithm"
                checked={this.state.playerFourZolasAlgorithm}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Medical Emergency </label>
              <input
                type="checkbox"
                name="playerFourMedicalEmergency"
                checked={this.state.playerFourMedicalEmergency}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Martial Law </label>
              <input
                type="checkbox"
                name="playerFourMartialLaw"
                checked={this.state.playerFourMartialLaw}
                onChange={this.onChange}
              ></input>
              <br />
              <label> Anti-Hero Propaganda </label>
              <input
                type="checkbox"
                name="playerFourAntiHeroPropaganda"
                checked={this.state.playerFourAntiHeroPropaganda}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <h1>Scenario 1</h1>
              <label> Laser Rifle </label>
              <input
                type="checkbox"
                name="laserRifle"
                checked={this.state.laserRifle}
                onChange={this.onChange}
              ></input>
              <br /> <label> Energy Shield </label>
              <input
                type="checkbox"
                name="energyShield"
                checked={this.state.energyShield}
                onChange={this.onChange}
              ></input>
              <br /> <label> Power Gauntlets </label>
              <input
                type="checkbox"
                name="powerGauntlets"
                checked={this.state.powerGauntlets}
                onChange={this.onChange}
              ></input>
              <br /> <label> Exo Suit </label>
              <input
                type="checkbox"
                name="exoSuit"
                checked={this.state.exoSuit}
                onChange={this.onChange}
              ></input>
              <br />
            </div>

            <div>
              <h1>Scenario 2</h1>
              <label>Number of Delay Counters on Main Scheme: </label>
              <input
                type="text"
                name="numOfDelayCounters"
                value={this.state.numOfDelayCounters}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <h1>Scenario 4</h1>
              <label>Players engaged with minions: </label>
              <br />
              <label> Player #1: </label>
              <input
                type="checkbox"
                name="playerOneEngaged"
                checked={this.state.playerOneEngaged}
                onChange={this.onChange}
              ></input>
              <br /> <label> Player #2: </label>
              <input
                type="checkbox"
                name="playerTwoEngaged"
                checked={this.state.playerTwoEngaged}
                onChange={this.onChange}
              ></input>
              <br /> <label> Player #3: </label>
              <input
                type="checkbox"
                name="playerThreeEngaged"
                checked={this.state.playerThreeEngaged}
                onChange={this.onChange}
              ></input>
              <br /> <label> Player #4: </label>
              <input
                type="checkbox"
                name="playerFourEngaged"
                checked={this.state.playerFourEngaged}
                onChange={this.onChange}
              ></input>
              <br />
              <h1>Allies Removed from campaign: </h1>
              <label>Player #1 Ally Removed: </label>
              <input
                type="text"
                name="playerOneAllyRemoved"
                value={this.state.playerOneAllyRemoved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Player #2 Ally Removed: </label>
              <input
                type="text"
                name="playerTwoAllyRemoved"
                value={this.state.playerTwoAllyRemoved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Player #3 Ally Removed: </label>
              <input
                type="text"
                name="playerThreeAllyRemoved"
                value={this.state.playerThreeAllyRemoved}
                onChange={this.onChange}
              ></input>
              <br />
              <label>Player #4 Ally Removed: </label>
              <input
                type="text"
                name="playerFourAllyRemoved"
                value={this.state.playerFourAllyRemoved}
                onChange={this.onChange}
              ></input>
              <br />
            </div>
            <div>
              <button type="submit">Save Campaign</button>
            </div>
          </form>
          <form onSubmit={this.handleDeleteSubmit}>
            <label>Delete Campaign: </label>
            <button type="submit" disabled={!this.state.allowDelete}>
              Delete
            </button>
            <label>Check box to confirm deletion</label>
            <input
              type="checkbox"
              name="allowDelete"
              checked={this.state.allowDelete}
              onChange={this.onChange}
            ></input>
          </form>
          <form onSubmit={this.handleLogoutSubmit}>
            <label>Logout of Campaign: </label>
            <button type="submit">Logout</button>
          </form>
        </React.Fragment>
      )
    }
  }
}

export default ChampionsForm
