package Juice;

import java.util.ArrayList;

import Components.Components;

public class Juice {
	
	ArrayList<Components> allComponents = new ArrayList<Components>();
	boolean done = false;
	
	public ArrayList<Components> getComponents(){
		return allComponents;
	}
	public boolean getDone(){
		return done;
	}
	public void changeDone(){
		done = true;
	}
	public Components getComponents(int index){
		return allComponents.get(index);
	}
	public int getSize(){
		return allComponents.size();
	}
	public boolean equals(Object o){
		int k = 0;
		Juice J = (Juice)o;
		for(Components  A : allComponents)
			for(Components B : J.allComponents)
			{
				if(A.equals(B) == true)
					k++;
			}
		if(k == allComponents.size()){
			return true;
		}
		else{
			return false;
		}
	}
}
