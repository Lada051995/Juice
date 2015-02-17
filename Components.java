package Components;

public class Components {
	
	private String componentName;
	
	public Components(String name){
		componentName = name;
	}
	
	public String getComponent(){
		return componentName;
	}
	
	public void setComponent(String name){
	  componentName = name;	
	}
	
	public boolean equals(Object obj){
		Components str = (Components)obj;
		return componentName.equals(str.componentName);	
	}
}
