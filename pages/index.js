import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
    <META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <form action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="POST">

<input type=hidden name="oid" value="00D0Q0000001TdQ">
<input type=hidden name="retURL" value="http://google.com">
<input type=hidden name="recordType" value="0120Q000000DYXCQA4">
<input type="hidden" id="lead_source" name="lead_source" value="Web - J'aime l'info" />

<!--  ----------------------------------------------------------------------  -->
<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!--  <input type="hidden" name="debug" value=1>                              -->
<!--  <input type="hidden" name="debugEmail"                                  -->
<!--  value="krhellab@manao.consulting">                                      -->
<!--  ----------------------------------------------------------------------  -->

Nom du site*<input  id="00N0Q000001qyrU" maxlength="50" name="00N0Q000001qyrU" size="20" type="text" required /><br>

<label for="url">URL du site*</label><input  id="url" maxlength="80" name="url" size="20" type="text" required /><br>

<label for="company">Nom de la soci&eacute;t&eacute; &eacute;ditrice*</label><input  id="company" maxlength="40" name="company" size="20" type="text" required /><br>

Raison sociale<select  id="00N0Q000001qyrj" name="00N0Q000001qyrj" title="Raison sociale"><option value="">--None--</option><option value="SA">SA</option>
<option value="SARL">SARL</option>
<option value="SAS">SAS</option>
<option value="SCA">SCA</option>
<option value="SCS">SCS</option>
<option value="SNC">SNC</option>
</select><br>

<label for="street">Adresse*</label><textarea name="street" required></textarea><br>

<label for="zip">Code postal*</label><input  id="zip" maxlength="20" name="zip" size="20" type="text" required/><br>

<label for="city">Ville*</label><input  id="city" maxlength="40" name="city" size="20" type="text" required/><br>

Nom de la publication:<input  id="00N0Q000001r1ti" maxlength="80" name="00N0Q000001r1ti" size="20" type="text" required/><br>

Numéro CPPAP*<input  id="00N0Q000001qyus" maxlength="50" name="00N0Q000001qyus" size="20" type="text" required/><br>

Actionnariat:<textarea  id="00N0Q000001qyrP" name="00N0Q000001qyrP" rows="3" type="text" wrap="soft" required></textarea><br>

Mentions légales:<input  id="00N0Q000002CE00" maxlength="255" name="00N0Q000002CE00" size="20" type="text" required/><br>

<label for="first_name">Prénom*</label><input  id="first_name" maxlength="40" name="first_name" size="20" type="text" required/><br>

<label for="last_name">Nom*</label><input  id="last_name" maxlength="80" name="last_name" size="20" type="text" required/><br>

<label for="email">Adresse e-mail*</label><input  id="email" maxlength="80" name="email" size="20" type="text" required/><br>

<label for="mobile">T&eacute;l&eacute;phone</label><input  id="mobile" maxlength="40" name="mobile" size="20" type="text" /><br>

<input  id="00N0Q000001qyro" name="00N0Q000001qyro" type="checkbox" value="1" required/>J&rsquo;ai lu les<a href="https://www.jaimelinfo.fr/cgu/" rel="noopener noreferrer" target="_blank"> Conditions g&eacute;n&eacute;rales d&rsquo;utilisation</a> du service et m&rsquo;engage &agrave; les respecter.
Tout manquement peut entra&icirc;ner la r&eacute;siliation de la collecte lanc&eacute;e sur J&rsquo;aime l&rsquo;info.<br>

<input type="submit" name="submit">

</form>

      </main>

      <Footer />
    </div>
  )
}
