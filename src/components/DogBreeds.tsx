import {useContext, useEffect, useMemo, useState} from "react";
import "./DogBreeds.css";
import axios from "axios";
import {capitalizeFirstLetter} from "../helper";
import {contextName} from "../App";

const DogBreeds = () => {
    //@ts-ignore
    const [breeds, setBreeds] = useState<{ name: string, subBreads: [string] }[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [sortedInDesc, setSortedInDesc] = useState<boolean>(true);

    const { setTitle } = useContext(contextName);

    const fetchDogBreeds = () => {
        setIsLoading(true)
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(function (response) {
                const formatedArray = Object.entries(response.data.message)?.map((data) => {
                    return{
                        name:data[0],
                        subBreads:data[1],
                    }
                })

                setTitle(formatedArray[0].name);
                //@ts-ignore
                setBreeds(formatedArray)
                setIsLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        fetchDogBreeds()
    }, [])


    const sortArray = () => {
        const sortedData = breeds.sort(function (a, b) {
            if (sortedInDesc) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
            } else {
                if (a.name < b.name) {
                    return -1;
                }
                if (b.name < a.name) {
                    return 1;
                }
            }

            return 0;
        })
        setSortedInDesc((status) => !status);
        setTitle(sortedData[0].name);
        setBreeds(sortedData);
    }

    const rows = useMemo<JSX.Element[]>(() => {

        const elements: JSX.Element[] = []

        breeds?.map(({name,subBreads},index) => {
            elements.push(
                <tr key={index}>
                    <td>{capitalizeFirstLetter(name)}</td>
                    <td>
                        <ul>
                            {subBreads.map((subBreedname) => {
                                return (
                                    <li>{subBreedname}</li>
                                )
                            })}
                        </ul>
                    </td>
                </tr>
            )
        })

        return elements;

    }, [breeds,sortedInDesc])

    return (
        <section>
            <h2>Dog breeds</h2>

            <p>
                A list of dog breeds fetched from{" "}
                <a href="https://dog.ceo/dog-api/">Dog API</a>
            </p>

            <table>
                <thead>
                <tr>
                    <th onClick={sortArray} >Breed</th>
                    <th>Sub breeds</th>
                </tr>
                </thead>
                <tbody>
                {isLoading ? "Loading Data" : rows}
                </tbody>
            </table>
        </section>
    );
};

export default DogBreeds;
